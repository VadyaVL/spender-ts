import * as React from 'react';
import {
  StyleSheet,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native';
import { Toolbar } from 'react-native-material-ui';

import { LeftMenu } from '../left-menu';

interface Props {
  backgroundImage: ImageSourcePropType;
}

export class PageLayout extends React.Component<Props> {
  private leftMenu: JSX.Element = <LeftMenu />

  public render(): JSX.Element {
    return (
      <ImageBackground source={this.props.backgroundImage} style={styles.backgroundImage}>
        {/* <Toolbar
          leftElement={this.leftMenu}
        /> */}
          {this.props.children}
      </ImageBackground>
    );
  }
}

var styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
});