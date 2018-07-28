import autobind from 'autobind-decorator';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Button } from 'react-native-material-ui';
import { NavigationScreenProp } from 'react-navigation';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { MenuActions } from '../../common/consts';
import { Category, ReduxState, ToolbarParams } from '../../common/interfaces';
import { PageLayoutWithToolbar } from '../../components';
import { Actions as CategoryListActions } from '../category-list/actions';
import { Actions } from './actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  button: {
    alignSelf: 'flex-end',
  },
});

interface ReduxProps {
  category: Category;
}

interface ReduxActions {
  setTitle: (value: string) => void;
  createCategory: () => void;
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
    action: MenuActions.CLOSE_SCREEN,
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      category: {
        id: -1,
        title: '',
        icon: 0,
        value: 0,
      },
    };
  }

  public render(): JSX.Element {
    const { category } = this.props;

    return (
      <PageLayoutWithToolbar
        navigation={this.props.navigation}
        toolbarParams={this.toolbarParams}
      >
        <View style={styles.container}>
          <TextField
            label='Title'
            value={category.title}
            onChangeText={this.props.setTitle}
          />
          <Button
            text='Save'
            raised={true}
            primary={true}
            onPress={this.onSaveClick}
            style={styles.button}
          />
        </View>
      </PageLayoutWithToolbar>
    );
  }

  @autobind
  private onSaveClick() {
    this.props.createCategory();
    this.props.navigation.pop();
  }
}

const mapStateToProps = (state: ReduxState): ReduxProps => {
  return {
    category: state.categoryEdit.currentCategory!,
  };
};

const mapDispathToProps = (dispatch: Dispatch<Action>): ReduxActions => {
  return {
    setTitle: (value: string) => {
      dispatch(Actions.setTitle(value));
    },
    createCategory: () => {
      dispatch(CategoryListActions.createCategory());
    },
  };
};

const connector = connect(mapStateToProps, mapDispathToProps);
export const CategoryEditScreen = connector(CategoryEditScreenComponent);
