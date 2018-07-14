import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  text: string;
}

export class CircleButton extends React.Component<Props> {
  public render(): JSX.Element {
    return (
      <View style={styles.container}>
        <Text>
          {this.props.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 25,
    padding: 5,
  },
});
