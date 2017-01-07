import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import {
  ExponentConfigView,
} from '@exponent/samples';
import { List, ListItem } from 'react-native-elements';
import { Font } from 'exponent';

const list2 = [
  {
    title: 'General',
    icon: 'av-timer'
  },
  {
    title: 'Edit Profile',
    icon: 'flight-takeoff'
  },
  {
    title: 'Notifications',
    icon: 'av-timer'
  },
  {
    title: 'Data',
    icon: 'flight-takeoff'
  },
  {
    title: 'Help Center',
    icon: 'av-timer'
  },
  {
    title: 'Report a Problem',
    icon: 'flight-takeoff'
  },
]

export default class SettingsScreen extends React.Component {
  // state = {
  //   fontLoaded: false,
  // };

  static route = {
    navigationBar: {
      title: (<Text style={{color: 'white', fontSize: 15}}>Settings</Text>),
      backgroundColor: '#175785',
    },
  }

  // componentDidMount() {
  //   Font.loadAsync({
  //     'space-mono': require('../containers/assets/fonts/SpaceMono-Regular.ttl'),
  //   });
  // }

  renderRow (rowData, sectionID) {
  return (
    <ListItem
      roundAvatar
      key={sectionID}
      title={rowData.name}
      subtitle={rowData.subtitle}
      avatar={{uri:rowData.avatar_url}}
    />
  )
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>
        <List>
          {
            list2.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{name: item.icon}}
              />
            ))
          }
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
