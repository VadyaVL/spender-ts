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
import { combineReducers, createStore } from 'redux';

import {
  Welcome,
  Spend,
  CategoryScreen,
} from './src/screens';
import { category } from './src/screens/category/reducer';
import { LeftMenu } from './src/components/left-menu';

const store = createStore(combineReducers({
	category,
}));

// Article

const stackNavigator: NavigationContainer = createStackNavigator(
  {
    Spend: { screen: Spend },
    /* Category: { screen: CategoryScreen }, */
  },
  {
    headerMode: 'none'
  },
);

const Route: NavigationContainer = createDrawerNavigator(
  {
    Category: { screen: CategoryScreen },
    Stack: { screen: stackNavigator },
  },
  {
    initialRouteName: 'Category',
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