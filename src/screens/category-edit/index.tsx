import * as React from 'react';
import { StyleSheet, View, ScrollView, Dimensions, Text } from 'react-native';
import { connect, Dispatch } from 'react-redux';
import { NavigationScreenProp } from 'react-navigation';
import { Action } from 'redux';

import { ReduxState, ToolbarParams } from '../../common/interfaces';
import { PageLayoutWithToolbar } from '../../components';
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
