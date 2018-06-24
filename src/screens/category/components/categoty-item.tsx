import * as React from 'react';
import { View, Text, StyleSheet, LayoutChangeEvent, Dimensions } from 'react-native';
import autobind from 'autobind-decorator';

import { Category } from '../../../common/interfaces';
import { CURRENCY } from '../../../common/consts';
import { Orientation } from '../../../common/enums';

const VERTICAL_ROW_COUNT = 4;
const HORIZONTAL_ROW_COUNT = 8;
const VERTICAL_ROW_PRECENAGE = 100 / VERTICAL_ROW_COUNT;
const HORIZONTAL_ROW_PRECENAGE = 100 / HORIZONTAL_ROW_COUNT;

const styles = StyleSheet.create({
  outerContainerV: {
    width: `${VERTICAL_ROW_PRECENAGE}%`,
    paddingTop: `${VERTICAL_ROW_PRECENAGE}%`,
    position: 'relative',
    backgroundColor: 'yellow',
  },
  outerContainerH: {
    width: `${HORIZONTAL_ROW_PRECENAGE}%`,
    paddingTop: `${HORIZONTAL_ROW_PRECENAGE}%`,
    position: 'relative',
    backgroundColor: 'yellow',
  },
  innerContainer: {
    margin: 5,
    position: 'absolute',
    backgroundColor: 'red',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,

    flex: 1,
  },
  titleStyle: {
    
  },
  iconStyle: {
    width: 40,
    paddingTop: 40,
    backgroundColor: 'green',
  },
  valueStyle: {
    
  },
});

interface Props {
  item: Category;
  orientation: Orientation;
}

export class CategoryItem extends React.Component<Props> {
 
  
  public render(): JSX.Element {
    const { item, orientation } = this.props;

    const outerStyle = orientation === Orientation.Vertical ? styles.outerContainerV : styles.outerContainerH;

    return (
      <View
        style={outerStyle}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.titleStyle}>
            {item.title}
          </Text>
          <View style={styles.iconStyle}/>
          <Text style={styles.valueStyle}>
            {`${item.value} ${CURRENCY}`}
          </Text>
        </View>
      </View>
    );
  }
}
