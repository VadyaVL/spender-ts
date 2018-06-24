import * as React from 'react';
import {
  StyleSheet,
  ImageBackground,
  ImageSourcePropType,
  StatusBar,
  View,
} from 'react-native';
import { COLOR } from 'react-native-material-ui';

interface Props {
  backgroundImage?: ImageSourcePropType;
}

export class PageLayout extends React.Component<Props> {
  public render(): JSX.Element {
    const { backgroundImage } = this.props;


    return (
      <React.Fragment>
        <View style={styles.statusBar} />
        {
          backgroundImage ?
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
              {this.props.children}
            </ImageBackground> :
            this.props.children
        }
      </React.Fragment>
    );
  }
}

var styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  statusBar: {
    backgroundColor: COLOR.green500,
    height: 24,
  }
});