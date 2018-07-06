import * as React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { connect, Dispatch } from 'react-redux';
import { Action } from 'redux';

import { CLOSE_SCREEN } from '../../common/consts';
import { ReduxState, ToolbarParams } from '../../common/interfaces';
import { PageLayoutWithToolbar } from '../../components';

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

class CategoryEditScreenComponent extends React.Component<Props> {
  public static navigationOptions = {
    title: 'Edit category',
  };
  private toolbarParams: ToolbarParams = {
    centerElement: 'Edit category',
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
          <Text>Add category</Text>
        </View>
      </PageLayoutWithToolbar>
    );
  }
}

const mapStateToProps = (state: ReduxState): ReduxProps => {
  return {
  };
};

const mapDispathToProps = (dispatch: Dispatch<Action>): ReduxActions => {
  return {
  };
};

const connector = connect(mapStateToProps, mapDispathToProps);
export const CategoryEditScreen = connector(CategoryEditScreenComponent);
