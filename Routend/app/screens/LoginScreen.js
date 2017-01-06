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
import { LoginForm } from 'react-native-uikit';
import Router from '../navigation/Router';

export default class Login extends React.Component {
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
        <View style={{flex: 1, backgroundColor: 'black'}}></View>
          <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}><Text>Routend Logo</Text></View>
            <View style={{flex: 1, backgroundColor: 'black'}}></View>
          <View style={{flex: 1.2, justifyContent: 'center', alignItems: 'center'}}>
              <LoginForm
              loginFb={() => console.log('login with facebook')}
              onSubmit={(email, password) => this.props.navigator.push(Router.getRoute('rootNavigation'))}
              error={false}
              errorMsg={'username or password incorrect'}
              style={{marginTop: 0}}
              radius={0}
              inputStyle={{height: 34, width: (Dimensions.get('window').width * 0.9), fontSize: 12}}
              usernameStyle={{bottom: -10, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}
              passwordStyle={{borderTopLeftRadius: 0, borderTopRightRadius: 0,}}
              btnStyle={{bottom: 12,}}
              />
          </View>
        <View style={{flex: 1.3, backgroundColor: 'black'}}></View>
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