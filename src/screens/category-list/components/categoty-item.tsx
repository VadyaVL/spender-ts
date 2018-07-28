import autobind from 'autobind-decorator';
import * as React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { Texts } from '../../../common/consts';
import { Category } from '../../../common/interfaces';
import { Actions as EditActions } from '../../category-edit/actions';

import spendImage from '../img/spend.jpg';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    borderRadius: 5,
    padding: 5,
    height: 100,
    backgroundColor: 'red',
    flex: 1,
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

interface ReduxActions {
  onLongPress: (item: Category) => void;
}

interface Props extends ReduxActions {
  item: Category;
}

class CategoryItemComponent extends React.Component<Props> {
  private rootRef: TouchableHighlight | undefined;

  constructor(props: Props) {
    super(props);
  }

  public render(): JSX.Element {
    const { item } = this.props;

    return (
      <TouchableHighlight
        ref={this.makeRootRef}
        onLongPress={this.onLongPress}
      >
        <View
          style={styles.container}
        >
          <Text
            style={styles.titleStyle}
            numberOfLines={1}
            ellipsizeMode='tail'
          >
            {item.title}
          </Text>
          {/* <Image source={spendImage} style={styles.iconStyle} /> */}
          <Text style={styles.valueStyle}>
            {`${item.value} ${Texts.CURRENCY}`}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

  @autobind
  private makeRootRef(ref: TouchableHighlight): void {
    this.rootRef = ref;
  }

  @autobind
  private onLongPress(): void {
    if (this.props.onLongPress) {
      this.props.onLongPress(this.props.item);
    }
  }
}

const mapDispathToProps = (dispatch: Dispatch<Action>): ReduxActions => {
  return {
    onLongPress: (item: Category) => {
      dispatch(EditActions.setCurrent(item));
    },
  };
};

const connector = connect(null, mapDispathToProps);
export const CategoryItem = connector(CategoryItemComponent);
