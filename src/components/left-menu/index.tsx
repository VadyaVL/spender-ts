import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Drawer } from 'react-native-material-ui';

import { NavigationScreenProp } from 'react-navigation';
import { PageLayout } from '..';

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

export class LeftMenu extends React.Component<Props> {
  public render(): JSX.Element {
    return (
      <PageLayout {...this.props}>
        <Drawer>
          <React.Fragment>
            {/* <Drawer.Header>
                <Drawer.Header.Account
                  avatar={<Avatar key={0} text="A" />}
                  accounts={[
                    { avatar: <Avatar key={1} text="B" />, },
                    { avatar: <Avatar key={2} text="C" /> },
                  ]}
                  footer={{
                    dense: true,
                    centerElement: {
                      primaryText: 'Reservio',
                      secondaryText: 'business@email.com',
                    },
                    rightElement: 'arrow-drop-down',
                  }}
                />
            </Drawer.Header> */}
            <Drawer.Section
              divider={true}
              items={[
                  { icon: 'bookmark-border', value: 'Notifications' },
                  { icon: 'today', value: 'Calendar', active: true },
                  { icon: 'people', value: 'Clients' },
              ]}
            />
            <Drawer.Section
              title='Personal'
              items={[
                { icon: 'info', value: 'Info' },
                { icon: 'settings', value: 'Settings' },
              ]}
            />
          </React.Fragment>
        </Drawer>
      </PageLayout>
    );
  }
}
