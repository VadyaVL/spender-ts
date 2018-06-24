import * as React from 'react';
import {
  StyleSheet,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native';

interface Props {
  backgroundImage?: ImageSourcePropType;
}

export class PageLayout extends React.Component<Props> {
  public render(): JSX.Element {
    const { backgroundImage } = this.props;


    return (
      backgroundImage ?
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
          {this.props.children}
      </ImageBackground> :
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    );
  }
}

var styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
});