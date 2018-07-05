import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { PageLayoutWithToolbar } from '../../components';
import { ToolbarParams } from '../../common/interfaces';
import { CLOSE_SCREEN } from '../../common/consts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

interface ReduxProps {
}

interface ReduxActions {
}

interface Props extends ReduxProps, ReduxActions {
  navigation: NavigationScreenProp<any, any>;
};

export class ExpenseScreen extends React.Component<Props> {
  public static navigationOptions = {
    title: 'Expense',
  };
  private toolbarParams: ToolbarParams = {
    centerElement: 'Expense',
    leftElement: 'keyboard-arrow-left',
    action: CLOSE_SCREEN,
  };

  public render(): JSX.Element {
    return (
      <PageLayoutWithToolbar
        navigation={this.props.navigation}
        toolbarParams={this.toolbarParams}
      >
        <View style={styles.container}>
          <Text>Expense</Text>
        </View>
      </PageLayoutWithToolbar>
    );
  }
}
