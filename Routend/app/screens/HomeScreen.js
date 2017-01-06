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
  Dimensions,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { Components } from 'exponent';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import Button from 'apsl-react-native-button';
import Router from '../navigation/Router';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date:"2016-05-15",
      position: '',
      currentPosition: {
              latitude: 0,
              longitude: 0,
              latitudeDelta: 0,
              longitudeDelta: 0,
            },
    }
  }
  static route = {
    navigationBar: {
      visible: true,
      title: (<Image style={{height: 30, width: 100}} source={{uri: 'http://servicevirtualization.com/wp-content/uploads/2015/09/testing_graphic.jpg'}}></Image>)
    },
  }

  componentWillMount() {
    this._setPosition();
    console.log(this.props);
    // this.test = this.props.polylines.map(function(item) {
    //   return item.coordinates;
    // });

  }

  setCurrentPosition(position) {
    this.setState({
            currentPosition: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }
        });
  }

  // componentDidMount() {
  //   setInterval(this._setPosition.bind(this), 5000);
  // }

  _setPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
        this.setCurrentPosition(position);
    }, (error) => {
        alert(error)
    }, {timeout: 20000, maximumAge: 1000});
}

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f6f6f6'}}>

        <View style={{flex: 10}}>
        <Components.MapView.Animated
            showsUserLocation={true}

            style={{flex: 13, zIndex: 0}}
            initialRegion={this.state.currentPosition}
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
          strokeColor={'#b2b2ff'}
          />
      </Components.MapView.Animated>

      <View style={{flex: 1.2, position: 'absolute', zIndex: 1, top: (Dimensions.get('window').height * 0.686)}}>
        <View style={{justifyContent: 'center', flexDirection: 'row', backgroundColor: '#fcfcfc', width: (Dimensions.get('window').width * 0.92), height: (Dimensions.get('window').height * 0.10), borderRadius: 2, left: (Dimensions.get('window').width * 0.04), borderWidth: 0.8, borderColor: '#d3d3d3', opacity: 0.97}}>
        <DatePicker
            style={{height: 2000, width: 118, right: 8, top: (Dimensions.get('window').height * 0.015)}}
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
                top: 8.3,
                marginLeft: 0,
                height: 23,
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

      <Button onPress={() => { this.props.navigator.push(Router.getRoute('friendslist'))}}style={{backgroundColor: '#fafafa', top: (Dimensions.get('window').height * 0.026), left: 8, height: 25, width: 100, borderRadius: 3, borderColor: '#d3d3d3'}} textStyle={{fontSize: 12}}>
  Track a Place
</Button>
</View>
</View></View>
      </View>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    AppState: state
  }
}

export default connect(mapStateToProps)(HomeScreen);