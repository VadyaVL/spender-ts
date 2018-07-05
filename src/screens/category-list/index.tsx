import * as React from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import { connect, Dispatch } from 'react-redux';
import { NavigationScreenProp } from 'react-navigation';
import { Action } from 'redux';
import autobind from 'autobind-decorator';
import { ActionButton, BottomNavigation } from 'react-native-material-ui';

import { ReduxState, ToolbarParams } from '../../common/interfaces';
import { PageLayoutWithToolbar } from '../../components';
import { CategoryItem } from './components';
import { Category } from '../../common/interfaces';
import { Orientation } from '../../common/enums';
import * as actions from './actions';
import { OPEN_MENU } from '../../common/consts';

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

interface ReduxActions {
  loadCategories: () => void;
}

interface Props extends ReduxProps, ReduxActions {
  navigation: NavigationScreenProp<any, any>;
};

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
    leftElement: 'menu',
    action: OPEN_MENU,
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      orientation: Orientation.Vertical,
    };

    this.props.loadCategories();
  }

  public render(): JSX.Element {
    const { categories } = this.props;
    return (
      <PageLayoutWithToolbar
        backgroundImage={backgroundImage}
        navigation={this.props.navigation}
        toolbarParams={this.toolbarParams}
      >
        <ScrollView onLayout={this.onLayout}>
          <View style={styles.container}>
            {categories.map((category, index): JSX.Element => <CategoryItem key={index} item={category} />)}
          </View>
        </ScrollView>
        {/* <ActionButton actions={this.actions} onPress={this.onActionBtnPress} /> */}
        <BottomNavigation>
          <BottomNavigation.Action
              key='expense'
              icon='shopping-cart'
              label='Expense'
              onPress={this.onExpensePress}
              active={false}
          />
      </BottomNavigation>
      </PageLayoutWithToolbar>
    );
  }

  @autobind
  private onExpensePress(): void {
    this.props.navigation.navigate('Expense');
  }

  @autobind
  private onActionBtnPress(): void {
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
      dispatch(actions.loadCategoriesRequest());
    }
  };
};

const connector = connect(mapStateToProps, mapDispathToProps);
export const CategoryListScreen = connector(CategoryListScreenComponent);