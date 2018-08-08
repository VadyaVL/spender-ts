import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { PageLayout } from '../../components';
import logoNameWhite from './img/logo-name-white.jpg';

export class SplashScreen extends React.Component {
  public render(): JSX.Element {
    return (
      <PageLayout>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={logoNameWhite}
            resizeMode='cover'
          />
        </View>
      </PageLayout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    maxHeight: 300,
  },
});
