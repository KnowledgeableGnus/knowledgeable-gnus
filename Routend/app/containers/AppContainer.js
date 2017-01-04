import React, { Component } from 'react';
// import ReactNative from 'react-native';
import { connect } from'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import Home from './Home';
import {
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';
import {
  AppRegistry,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Router from '../navigation/Router';


class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // console.log('propz', this.props, 'context', this.props.context);
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [
          require('./assets/images/exponent-wordmark.png'),
        ],
        fonts: [
          FontAwesome.font,
          {'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')},
        ],
      });
    } catch(e) {
      // console.warn(
      //   'There was an error caching assets (see: main.js), perhaps due to a ' +
      //   'network timeout, so we skipped caching. Reload the app to try again.'
      // );
      console.log(e.message);
    } finally {
      this.setState({appIsReady: true});
    }
  }

  render() {
    if (this.state.appIsReady) {
      return (
        <View style={styles.container}>
          <NavigationProvider router={Router}>
            <StackNavigation id="root" initialRoute={Router.getRoute('rootNavigation')} />
          </NavigationProvider>

          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
        </View>
      );
    } else {
      return (
        <Exponent.Components.AppLoading />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
      // <Home {...this.props} />

//sending dispatching actions/ sending to rest of application
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

// takes all actions and dispatches to props,
// state is global state of the object.
export default connect((state) => {
  return {}
}, mapDispatchToProps)(AppContainer);
