import * as React from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import { ReduxState } from '../../common/interfaces';
import { PageLayoutWithToolbar } from '../../components';
import { CategoryItem } from './components';
import { Category } from '../../common/interfaces';
import autobind from 'autobind-decorator';
import { Orientation } from '../../common/enums';
import { NavigationScreenProp } from 'react-navigation';

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

interface Props extends ReduxProps {
  navigation: NavigationScreenProp<any, any>;
};

interface State {
  orientation: Orientation;
}

class CategoryScreenComponent extends React.Component<Props, State> {
  public static navigationOptions = {
    title: 'Categories',
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      orientation: Orientation.Vertical,
    };
  }

  public render(): JSX.Element {
    const { categories } = this.props;
    return (
      <PageLayoutWithToolbar
        backgroundImage={backgroundImage}
        navigation={this.props.navigation}
      >
        <ScrollView onLayout={this.onLayout}>
          <View style={styles.container}>
            {categories.map((category, index): JSX.Element => <CategoryItem key={index} item={category} />)}
          </View>
        </ScrollView>
      </PageLayoutWithToolbar>
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
    categories: state.category.categories,
  };
};

const connector = connect(mapStateToProps);
export const CategoryScreen = connector(CategoryScreenComponent);
