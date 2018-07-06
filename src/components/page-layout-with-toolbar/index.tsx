import autobind from 'autobind-decorator';
import * as React from 'react';
import { ImageSourcePropType } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

import { NavigationScreenProp } from 'react-navigation';
import { CLOSE_SCREEN, OPEN_MENU } from '../../common/consts';
import { ToolbarParams } from '../../common/interfaces';
import { PageLayout } from '../page-layout';

interface Props {
  backgroundImage?: ImageSourcePropType;
  navigation: NavigationScreenProp<any, any>;
  toolbarParams: ToolbarParams;
}

export class PageLayoutWithToolbar extends React.Component<Props> {
  public render(): JSX.Element {

    const { toolbarParams, ...rest } = this.props;

    return (
      <PageLayout {...rest}>
        <Toolbar
          leftElement={toolbarParams.leftElement}
          centerElement={toolbarParams.centerElement}
          onLeftElementPress={this.onLeftElementPress}
        />
        {this.props.children}
      </PageLayout>
    );
  }

  @autobind
  private onLeftElementPress(): void {
    const { toolbarParams } = this.props;

    switch (toolbarParams.action) {
      case OPEN_MENU:
        this.props.navigation.openDrawer();
        break;
      case CLOSE_SCREEN:
        this.props.navigation.pop();
        break;
      default:
    }
  }
}
