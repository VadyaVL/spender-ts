import * as React from 'react';
import { View, Text } from 'react-native';

export class ExpenseScreen extends React.Component {
  public static navigationOptions = {
    title: 'Expense',
  };

  public render(): JSX.Element {
    return (
      <View>
        <Text>Expense</Text>
      </View>
    );
  }
}
