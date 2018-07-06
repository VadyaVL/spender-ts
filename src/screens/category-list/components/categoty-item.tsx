import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { CURRENCY } from '../../../common/consts';
import { Category } from '../../../common/interfaces';

import spendImage from '../img/spend.jpg';

const styles = StyleSheet.create({
  outerContainer: {
    width: 96,
    height: 96,
  },
  innerContainer: {
    margin: 5,
    flex: 1,
    justifyContent: 'space-between',
  },
  titleStyle: {
    alignSelf: 'flex-start',
    color: 'white',
  },
  iconStyle: {
    flex: 1,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  valueStyle: {
    alignSelf: 'flex-end',
  },
});

interface Props {
  item: Category;
}

export class CategoryItem extends React.Component<Props> {
  public render(): JSX.Element {
    const { item } = this.props;

    return (
      <View
        style={styles.outerContainer}
      >
        <View style={styles.innerContainer}>
          <Text
            style={styles.titleStyle}
            numberOfLines={1}
            ellipsizeMode='tail'
          >
            {item.title}
          </Text>
          <Image source={spendImage} style={styles.iconStyle} />
          <Text style={styles.valueStyle}>
            {`${item.value} ${CURRENCY}`}
          </Text>
        </View>
      </View>
    );
  }
}
