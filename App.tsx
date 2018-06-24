import * as React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {
  createStackNavigator,
  NavigationContainer,
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

const store = createStore(combineReducers({
	category,
}));

const StackNavigator: NavigationContainer = createStackNavigator(
  {
    Welcome: { screen: Welcome },
    Spend: { screen: Spend },
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
);

export default class App extends React.Component {
  public render(): JSX.Element {
    return (
      <Provider store={store}>
        <ThemeProvider uiTheme={uiTheme}>
          <View style={styles.container}>
            {/* <StackNavigator /> */}
            <CategoryScreen />
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