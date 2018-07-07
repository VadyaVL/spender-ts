import autobind from 'autobind-decorator';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomNavigation } from 'react-native-material-ui';
import { NavigationScreenProp } from 'react-navigation';

import { OPEN_MENU } from '../../common/consts';
import { ToolbarParams } from '../../common/interfaces';
import { PageLayoutWithToolbar } from '../../components';
import { CategoryListNavigationProps } from '../category-list';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

// tslint:disable-next-line:no-empty-interface
interface ReduxProps {
}

// tslint:disable-next-line:no-empty-interface
interface ReduxActions {
}

interface Props extends ReduxProps, ReduxActions {
  navigation: NavigationScreenProp<any, any>;
}

export class MainScreen extends React.Component<Props> {
  public static navigationOptions = {
    title: 'Main',
  };
  private toolbarParams: ToolbarParams = {
    centerElement: 'Main',
    leftElement: 'menu',
    action: OPEN_MENU,
  };

  public render(): JSX.Element {
    return (
      <PageLayoutWithToolbar
        navigation={this.props.navigation}
        toolbarParams={this.toolbarParams}
      >
        <View style={styles.container}>
          <Text>Main page</Text>
        </View>
        <BottomNavigation>
          <BottomNavigation.Action
              key='revenue'
              icon='attach-money'
              label='Revenue'
              onPress={this.onRevenuePress}
              active={false}
          />
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
  private onRevenuePress(): void {
    // this.props.navigation.navigate('CategoryList');
  }

  @autobind
  private onExpensePress(): void {
    const categoryListNavigationProps: CategoryListNavigationProps = {
      test: 'From MAIN',
    };

    this.props.navigation.navigate('CategoryList', categoryListNavigationProps);
  }
}
