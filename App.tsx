import * as React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { COLOR, getTheme, ThemeContext } from 'react-native-material-ui';
import {
  createDrawerNavigator,
  createStackNavigator,
  NavigationContainer,
} from 'react-navigation';
import { Provider } from 'react-redux';
import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import { Screens } from './src/common/consts';
import { LeftMenu } from './src/components/left-menu';
import saga from './src/sagas';
import {
  CategoryEditScreen,
  CategoryListScreen,
  ExpenseAddScreen,
  MainScreen,
} from './src/screens';
import { categoryEdit } from './src/screens/category-edit/reducer';
import { categoryList } from './src/screens/category-list/reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    categoryList,
    categoryEdit,
  }),
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(saga);

// Article

const rootStackNavigator: NavigationContainer = createStackNavigator(
  {
    Main: { screen: MainScreen },
    CategoryList: { screen: CategoryListScreen },
    CategoryEdit: { screen: CategoryEditScreen },
    ExpenseAdd: { screen: ExpenseAddScreen },
    /* Splash: { screen: SplashScreen }, */
  },
  {
    initialRouteName: Screens.CategoryList/* 'Splash' */ /*Screens.Main*//* Screens.ExpenseAdd*/,
    headerMode: 'none',
  },
);

const Route: NavigationContainer = createDrawerNavigator(
  {
    RootStack: { screen: rootStackNavigator },
    // CategoryEdit: { screen: CategoryEditScreen },
    // Stack: { screen: stackNavigator },
  },
  {
    initialRouteName: Screens.RootStack,
    contentComponent: LeftMenu,
    contentOptions: {
    style: {
      flex: 1,
      paddingTop: 15,
    },
  },
});

// End Article

/* const StackNavigator: NavigationContainer = createStackNavigator(
  {
    Welcome: { screen: Welcome },
    Spend: { screen: Spend },
    Category: { screen: CategoryScreen },
  },
  {
    initialRouteName: 'Welcome',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
); */

export default class App extends React.Component {
  public render(): JSX.Element {
    return (
      <Provider store={store}>
        <ThemeContext.Provider uiTheme={getTheme(uiTheme)}>
          <View style={styles.container}>
            {/* <StackNavigator /> */}
            {/* <CategoryScreen /> */}
            <Route />
          </View>
        </ThemeContext.Provider>
      </Provider>
    );
  }
}

export {
  App,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};
