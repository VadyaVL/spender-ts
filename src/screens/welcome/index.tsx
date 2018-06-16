import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-material-ui';
import { NavigationScreenProp } from 'react-navigation';

import { PageLayout } from '../../components'

const backgroundImage = require('./img/background.jpg');

interface Props {
  navigation: NavigationScreenProp<any,any>;
};

export class Welcome extends React.Component<Props> {

  public static navigationOptions = {
    header: null,
  };

  public render(): JSX.Element {
    return (
      <PageLayout backgroundImage={backgroundImage}>
        <View style={styles.inputs}>
          <Text>GUU12</Text>
        </View>
        <View style={styles.actions}>
          <Button
            text='Sign IN'
            style={{text: styles.buttonText}}
            onPress={() => this.props.navigation.navigate('Spend')}
          />
          <Button
            text='Sign UP'
            style={{text: styles.buttonText}}
          />
        </View>
      </PageLayout>
    );
  }
}

const styles = StyleSheet.create({
  inputs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  buttonText: {
    color: 'white',
  },
});