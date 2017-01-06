import {
  createRouter,
} from '@exponent/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RootNavigation from './RootNavigation';
import FriendsList from '../screens/FriendsList';
import Social from '../screens/SocialScreen';
import Login from '../screens/LoginScreen';

export default createRouter(() => ({
  home: () => HomeScreen,
  links: () => LinksScreen,
  settings: () => SettingsScreen,
  rootNavigation: () => RootNavigation,
  friendslist: () => FriendsList,
  social: () => Social,
  login: () => Login,
}));
