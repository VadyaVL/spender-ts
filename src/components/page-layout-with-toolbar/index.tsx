import { Toolbar } from 'react-native-material-ui';
import * as React from 'react';
import { ImageSourcePropType } from 'react-native';
import autobind from 'autobind-decorator';

import { PageLayout } from '../page-layout';
import { NavigationScreenProp } from 'react-navigation';

interface Props {
  backgroundImage?: ImageSourcePropType;
  navigation: NavigationScreenProp<any,any>;
}

export class PageLayoutWithToolbar extends React.Component<Props> {
  public render(): JSX.Element {
    return (
      <PageLayout {...this.props}>
        <Toolbar
          leftElement='menu'
          centerElement='Categories'
          onLeftElementPress={this.onHamburgerMenuPress}
        />
        {this.props.children}
      </PageLayout>
    );
  }

  @autobind
  private onHamburgerMenuPress(): void {
    // open menu
    console.log('Open menu');
    this.props.navigation.openDrawer();
  }
}
