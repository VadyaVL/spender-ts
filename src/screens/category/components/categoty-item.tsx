import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Category } from '../interfaces';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

interface Props {
  item: Category;
}

export class CategoryItem extends React.Component<Props> {
  public render(): JSX.Element {
    const { item } = this.props;

    return (
      <View style={styles.container}>
        <Text>
          {item.title}
        </Text>
      </View>
    );
  }
}
