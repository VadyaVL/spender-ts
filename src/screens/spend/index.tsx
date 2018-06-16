import * as React from 'react';
import { View, Text } from 'react-native';

export class Spend extends React.Component {
  public static navigationOptions = {
    title: 'Spend',
  };

  public render(): JSX.Element {
    return (
      <View>
        <Text>Spend</Text>
      </View>
    );
  }
}
