import autobind from 'autobind-decorator';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-material-ui';
import { NavigationScreenProp } from 'react-navigation';

import { PageLayout } from '../../components';

import { Screens } from '../../common/consts';
import backgroundImage from './img/background.jpg';

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

export class Welcome extends React.Component<Props> {
  public render(): JSX.Element {
    return (
      <PageLayout backgroundImage={backgroundImage}>
        <View style={styles.inputs}>
          <Button
            text='Categories'
            style={{text: styles.buttonText}}
            onPress={this.navigateToCategory}
          />
          <Button
            text='Sign IN'
            style={{text: styles.buttonText}}
            onPress={this.navigateToSpend}
          />
          <Button
            text='Sign UP'
            style={{text: styles.buttonText}}
          />
        </View>
        <View style={styles.actions}>
          <Button
            text='Sign IN'
            style={{text: styles.buttonText}}
            onPress={this.navigateToSpend}
          />
          <Button
            text='Sign UP'
            style={{text: styles.buttonText}}
          />
        </View>
      </PageLayout>
    );
  }

  @autobind
  private navigateToCategory() {
    this.props.navigation.navigate(Screens.Main);
  }

  @autobind
  private navigateToSpend() {
    this.props.navigation.navigate(Screens.ExpenseAdd);
  }
}

const styles = StyleSheet.create({
  inputs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
  },
});
