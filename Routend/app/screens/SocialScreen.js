import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
} from 'react-native';
import {
  ExponentConfigView,
} from '@exponent/samples';
import { List, ListItem } from 'react-native-elements';
import { ProfileHeader } from 'react-native-uikit';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amanda Martin',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    subtitle: 'CEO'
  },
  {
    name: 'Christy Thomas',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
    subtitle: 'Lead Developer'
  },
  {
    name: 'Melissa Jones',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/nuraika/128.jpg',
    subtitle: 'CTO'
  }
]

export default class Social extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  }

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
      <View
        style={styles.container}>
          <ProfileHeader
          profileImg={'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg'}
          backgroundImg={'http://download.4-designer.com/files/20130905/Creative-graphics-background-vector-material-49766.jpg'}
          />
          <List containerStyle={{marginBottom: 20}}>
          {
            list.map((l, i) => (
              <ListItem
                roundAvatar
                onPress={() => console.log('something')}
                avatar={l.avatar_url}
                key={i}
                title={l.name}
                subtitle={l.subtitle}
              />
            ))
          }
          </List>
      </View>
    );
  }
}

/*
        <List containerStyle={{marginBottom: 20}}>
        {
          list.map((l, i) => (
            <ListItem
              roundAvatar
              onPress={() => console.log('something')}
              avatar={l.avatar_url}
              key={i}
              title={l.name}
              subtitle={l.subtitle}
            />
          ))
        }
        </List>
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});