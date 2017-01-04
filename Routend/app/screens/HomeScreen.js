import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { Components } from 'exponent';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date:"2016-05-15",
      position: ''
    }
  }
  static route = {
    navigationBar: {
      visible: false,
    },
  }

  componentWillMount() {
    this._setPosition();
    this.test = this.props.polylines.map(function(item) {
      return item.coordinates;
    });

  }

  // componentDidMount() {
  //   setInterval(this._setPosition.bind(this), 5000);
  // }


  _setPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
        this.setState({
            position: position
        });
    }, (error) => {
        alert(error)
    }, {timeout: 20000, maximumAge: 1000});
}

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1.5}}>
        </View>
        <Components.MapView.Animated
            showUserLocation={true}

            style={{flex: 13, borderRadius: 7, marginHorizontal: 10}}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            followsUserLocation={true}
            showsCompass={true}
            >

          {this.props.polylines.map(marker =>
            <Components.MapView.Marker

              coordinate={marker.coordinates}
              title={'test'}
              description={'test'}
            />
          )}

          <Components.MapView.Polyline
          coordinates={this.test}
          strokeWidth={3}
          strokeColor={'#000'}
          />
      </Components.MapView.Animated>
      <View style={{flex: 1.2}}>
      <DatePicker
        style={{height: 2000, width: 118, left: 10}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2017-12-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 6.5,
            marginLeft: 0,
            height: 25,
          },
          dateInput: {
            marginLeft: 32
          }
        }}
        onDateChange={(date) => {
          console.log(date);
          this.setState({date: date})
          }
        }
      />
      </View>

      </View>
    );
  }
}


function mapStateToProps(state) {
  return {
    polylines: state.today
  }
}

export default connect(mapStateToProps)(HomeScreen);
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   developmentModeText: {
//     marginBottom: 20,
//     color: 'rgba(0,0,0,0.4)',
//     fontSize: 15,
//     textAlign: 'center',
//   },
//   contentContainer: {
//     paddingTop: 80,
//   },
//   welcomeContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   welcomeImage: {
//     width: 200,
//     height: 34.5,
//     marginTop: 3,
//   },
//   getStartedContainer: {
//     alignItems: 'center',
//     marginHorizontal: 50,
//   },
//   homeScreenFilename: {
//     marginVertical: 7,
//   },
//   codeHighlightText: {
//     color: 'rgba(96,100,109, 0.8)',
//   },
//   codeHighlightContainer: {
//     backgroundColor: 'rgba(0,0,0,0.05)',
//     borderRadius: 3,
//     paddingHorizontal: 4,
//   },
//   getStartedText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     lineHeight: 23,
//     textAlign: 'center',
//   },
//   tabBarInfoContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     ...Platform.select({
//       ios: {
//         shadowColor: 'black',
//         shadowOffset: {height: -3},
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//       },
//       android: {
//         elevation: 20,
//       },
//     }),
//     alignItems: 'center',
//     backgroundColor: '#fbfbfb',
//     paddingVertical: 20,
//   },
//   tabBarInfoText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     textAlign: 'center',
//   },
//   navigationFilename: {
//     marginTop: 5,
//   },
//   helpContainer: {
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   helpLink: {
//     paddingVertical: 15,
//   },
//   helpLinkText: {
//     fontSize: 14,
//     color: '#2e78b7',
//   },
// });

//  _maybeRenderDevelopmentModeWarning() {
//     if (__DEV__) {
//       const learnMoreButton = (
//         <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
//           Learn more
//         </Text>
//       );

//       return (
//         <Text style={styles.developmentModeText}>
//           Development mode is enabled, your app will run slightly slower but
//           you have access to useful development tools. {learnMoreButton}.
//         </Text>
//       );
//     } else {
//       return (
//         <Text style={styles.developmentModeText}>
//           You are not in development mode, your app will run at full speed.
//         </Text>
//       );
//     }
//   }

//   _handleLearnMorePress = () => {
//     Linking.openURL('https://docs.getexponent.com/versions/latest/guides/development-mode');
//   }

//   _handleHelpPress = () => {
//     Linking.openURL('https://docs.getexponent.com/versions/latest/guides/up-and-running.html#can-t-see-your-changes');
//   }
// }