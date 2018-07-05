import * as React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {
  createStackNavigator,
  NavigationContainer,
  createDrawerNavigator,
} from 'react-navigation';
import {
  COLOR,
  ThemeProvider,
} from 'react-native-material-ui';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware,  } from 'redux';
import createSagaMiddleware from 'redux-saga';

import saga from './src/sagas';
import {
  Welcome,
  ExpenseScreen,
  CategoryListScreen,
  CategoryEditScreen,
} from './src/screens';
import { categoryList } from './src/screens/category-list/reducer';
import { LeftMenu } from './src/components/left-menu';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    categoryList,
  }),
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(saga);

// Article

const categoryStackNavigator: NavigationContainer = createStackNavigator(
  {
    CategoryList: { screen: CategoryListScreen },
    CategoryEdit: { screen: CategoryEditScreen },
    Expense: { screen: ExpenseScreen },
  },
  {
    initialRouteName: 'CategoryList',
    headerMode: 'none',
  },
);

const Route: NavigationContainer = createDrawerNavigator(
  {
    CategoryStack: { screen: categoryStackNavigator },
    //CategoryEdit: { screen: CategoryEditScreen },
    //Stack: { screen: stackNavigator },
  },
  {
    initialRouteName: 'CategoryStack',
    contentComponent: LeftMenu,
    contentOptions: {
    style: {
      flex: 1,
      paddingTop: 15,
    },
  }
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
        <ThemeProvider uiTheme={uiTheme}>
          <View style={styles.container}>
            {/* <StackNavigator /> */}
            {/* <CategoryScreen /> */}
            <Route />
          </View>
        </ThemeProvider>
	    </Provider>
    );
  }
}

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