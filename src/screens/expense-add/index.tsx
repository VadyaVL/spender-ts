import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { MenuActions } from '../../common/consts';
import { ToolbarParams } from '../../common/interfaces';
import { PageLayoutWithToolbar } from '../../components';
import { CircleButton } from './components';

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

export class ExpenseAddScreen extends React.Component<Props> {
  private toolbarParams: ToolbarParams = {
    centerElement: 'Expense',
    leftElement: 'keyboard-arrow-left',
    action: MenuActions.CLOSE_SCREEN,
  };

  public render(): JSX.Element {
    return (
      <PageLayoutWithToolbar
        navigation={this.props.navigation}
        toolbarParams={this.toolbarParams}
      >
        <View style={styles.container}>
          <Text>Expense</Text>
          <CircleButton
            text='1'
          />
        </View>
      </PageLayoutWithToolbar>
    );
  }
}
