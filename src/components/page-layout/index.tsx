import * as React from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  StatusBar,
  StyleSheet,
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

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  statusBar: {
    backgroundColor: COLOR.green500,
    height: 24,
  },
});
