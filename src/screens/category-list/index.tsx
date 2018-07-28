import autobind from 'autobind-decorator';
import * as React from 'react';
import { Dimensions, GestureResponderEvent, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { ActionButton, RightElementPressEvent, ToolBarRightElement } from 'react-native-material-ui';
import GridView from 'react-native-super-grid';
import { NavigationScreenProp } from 'react-navigation';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { MenuActions, Screens, ToolbarActions } from '../../common/consts';
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
  gridView: {
    flex: 1,
  },
});

interface ReduxProps {
  categories: Category[];
  currentCategory: Category | null;
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
  private actions: string[] = ['Add category'];
  private toolbarParams: ToolbarParams = {
    centerElement: 'Categories',
    leftElement: 'keyboard-arrow-left',
    action: MenuActions.CLOSE_SCREEN,
  };
  private categoryActions: string[] = [ToolbarActions.EDIT, ToolbarActions.DELETE];

  constructor(props: Props) {
    super(props);

    this.state = {
      orientation: Orientation.Vertical,
    };

    this.props.loadCategories();
  }

  public render(): JSX.Element {
    const { categories, currentCategory } = this.props;
    const test: string = this.props.navigation.getParam('test', '');

    return (
      <PageLayoutWithToolbar
        backgroundImage={backgroundImage}
        navigation={this.props.navigation}
        toolbarParams={
          currentCategory ?
          { ...this.toolbarParams,
            rightElement: {
              actions: this.categoryActions,
            },
            onRightElementPress: this.toolbarRightElementClick,
          } :
          this.toolbarParams
        }
      >
        {/* <ScrollView onLayout={this.onLayout}> */}
          {/* <Text>{test}</Text> */}
          {/* NOT GRID, NOT SORT, PRIMITIVE */}
          {/* <View style={styles.container}>
            {categories.map((category, index): JSX.Element => <CategoryItem key={index} item={category} />)}
          </View> */}
          {/* <SortableGrid itemsPerRow={4} >
          {
            categories.map((category, index): JSX.Element => <CategoryItem key={index} item={category} />)
          }
          </SortableGrid> */}
        {/* </ScrollView> */}
        {/* <TouchableWithoutFeedback
          onPress={this.onPress}
        > */}
          <View
            style={styles.container}
          >
            <GridView
              style={styles.gridView}
              itemDimension={86}
              items={categories}
              renderItem={this.renderCategoryItem}
            />
          </View>
        {/* </TouchableWithoutFeedback> */}
        <ActionButton actions={this.actions} onPress={this.onActionBtnPress} />
      </PageLayoutWithToolbar>
    );
  }

  @autobind
  private renderCategoryItem(item: Category): JSX.Element {
    return (
      <CategoryItem item={item} />
    );
  }

  @autobind
  private onActionBtnPress(): void {
    this.props.createCategory();
    this.props.navigation.navigate(Screens.CategoryEdit);
  }

  @autobind
  private onLayout(): void {
    const { width, height } = Dimensions.get('window');

    this.setState({
      orientation: width < height ? Orientation.Vertical : Orientation.Horizontal,
    });
  }

  @autobind
  private toolbarRightElementClick(event: RightElementPressEvent): void {
    switch (event.action) {
      case ToolbarActions.EDIT:
        break;
      case ToolbarActions.DELETE:
        break;
      default:
    }
  }

  @autobind
  private onPress(event: GestureResponderEvent): void {
    // console.log(event);
  }
}

const mapStateToProps = (state: ReduxState): ReduxProps => {
  return {
    categories: state.categoryList.categories,
    currentCategory: state.categoryEdit.currentCategory,
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
