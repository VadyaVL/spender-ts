import autobind from 'autobind-decorator';
import * as React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import { ActionButton } from 'react-native-material-ui';
import SortableGrid from 'react-native-sortable-grid';
import { NavigationScreenProp } from 'react-navigation';
import { connect, Dispatch } from 'react-redux';
import { Action } from 'redux';

import { CLOSE_SCREEN } from '../../common/consts';
import { Orientation } from '../../common/enums';
import { Category, ReduxState, ToolbarParams } from '../../common/interfaces';
import { PageLayoutWithToolbar } from '../../components';
import { Actions as CategoryEditActions } from '../category-edit/actions';
import { Actions } from './actions';
import { CategoryItem } from './components';

import backgroundImage from './img/background.jpg';

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

interface ReduxActions {
  loadCategories: () => void;
  createCategory: () => void;
}

export interface CategoryListNavigationProps {
  test: string;
}

interface Props extends ReduxProps, ReduxActions {
  navigation: NavigationScreenProp<any, CategoryListNavigationProps>;
}

interface State {
  orientation: Orientation;
}

class CategoryListScreenComponent extends React.Component<Props, State> {
  public static navigationOptions = {
    title: 'Categories',
  };

  private actions: string[] = ['Add category'];
  private toolbarParams: ToolbarParams = {
    centerElement: 'Categories',
    leftElement: 'keyboard-arrow-left',
    action: CLOSE_SCREEN,
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      orientation: Orientation.Vertical,
    };

    this.props.loadCategories();
  }

  public render(): JSX.Element {
    const { categories, navigation } = this.props;
    const test: string = this.props.navigation.getParam('test', '');
    return (
      <PageLayoutWithToolbar
        backgroundImage={backgroundImage}
        navigation={this.props.navigation}
        toolbarParams={this.toolbarParams}
      >
        <ScrollView onLayout={this.onLayout}>
          <Text>{test}</Text>
          {/* NOT GRID, NOT SORT, PRIMITIVE */}
          <View style={styles.container}>
            {categories.map((category, index): JSX.Element => <CategoryItem key={index} item={category} />)}
          </View>
          {/* <SortableGrid itemsPerRow={4} >
          {
            categories.map((category, index): JSX.Element => <CategoryItem key={index} item={category} />)
          }
          </SortableGrid> */}
        </ScrollView>
        <ActionButton actions={this.actions} onPress={this.onActionBtnPress} />
      </PageLayoutWithToolbar>
    );
  }

  @autobind
  private onActionBtnPress(): void {
    this.props.createCategory();
    this.props.navigation.navigate('CategoryEdit');
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
    categories: state.categoryList.categories,
  };
};

const mapDispathToProps = (dispatch: Dispatch<Action>): ReduxActions => {
  return {
    loadCategories: () => {
      // dispatch(actions.saveTestCategory());
      dispatch(Actions.loadCategoriesRequest());
    },
    createCategory: () => {
      dispatch(CategoryEditActions.setCurrent({
        id: 0,
        title: '',
        icon: 0,
        value: 0,
      }));
    },
  };
};

const connector = connect(mapStateToProps, mapDispathToProps);
export const CategoryListScreen = connector(CategoryListScreenComponent);
