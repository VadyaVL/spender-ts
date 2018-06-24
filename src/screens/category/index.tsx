import * as React from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import { ReduxState } from '../../common/interfaces';
import { PageLayout } from '../../components';
import { CategoryItem } from './components';
import { Category } from '../../common/interfaces';
import autobind from 'autobind-decorator';
import { Orientation } from '../../common/enums';

const backgroundImage = require('./img/background.jpg');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    /* justifyContent: 'space-between', */
  },
});

interface ReduxProps {
  categories: Category[];
}

interface State {
  orientation: Orientation;
}

class CategoryScreenComponent extends React.Component<ReduxProps, State> {
  public static navigationOptions = {
    header: null,
  };

  constructor(props: ReduxProps) {
    super(props);
    
    this.state = {
      orientation: Orientation.Vertical,
    };
  }

  public render(): JSX.Element {
    const { categories } = this.props;
    return (
      <PageLayout backgroundImage={backgroundImage}>
        <ScrollView onLayout={this.onLayout}>
          <View style={styles.container}>
            {categories.map((category, index): JSX.Element => <CategoryItem key={index} item={category} orientation={this.state.orientation} />)}
          </View>
        </ScrollView>
      </PageLayout>
    );
  }
  
  @autobind
  private onLayout(): void {
    const { width, height } = Dimensions.get('window');

    this.setState({
      orientation: width < height ? Orientation.Vertical : Orientation.Horizontal,
    });
  }
}

const mapStateToProps = (state: ReduxState): ReduxProps => {
  return {
    categories: [...[...state.category.categories, ...state.category.categories, ...state.category.categories, ...state.category.categories], ...[...state.category.categories, ...state.category.categories, ...state.category.categories, ...state.category.categories]],
  };
};

const connector = connect(mapStateToProps);
export const CategoryScreen = connector(CategoryScreenComponent);
