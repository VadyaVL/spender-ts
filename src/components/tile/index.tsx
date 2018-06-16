import * as React from 'react';
import { Text } from 'react-native';

interface Props {
  text: string;
}

export class Tile extends React.Component<Props> {
  public render(): JSX.Element {
    const { text } = this.props;
    return (
      <Text>
        {text}
      </Text>
    );
  }
}
