import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { ReduxState } from '../../common/interfaces';
import { PageLayout } from '../../components';
import { CategoryItem } from './components';
import { Category } from './interfaces';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

interface ReduxProps {
  categories: Category[];
}

class CategoryScreenComponent extends React.Component<ReduxProps> {

  public static navigationOptions = {
    header: null,
  };

  public render(): JSX.Element {
    const { categories } = this.props;
    return (
      <PageLayout>
        <View style={styles.container}>
          {categories.map((category, index): JSX.Element => <CategoryItem key={index} item={category}/>)}
        </View>
      </PageLayout>
    );
  }
}

const mapStateToProps = (state: ReduxState): ReduxProps => {
  return {
    categories: state.category.categories,
  };
};

const connector = connect(mapStateToProps);
export const CategoryScreen = connector(CategoryScreenComponent);
