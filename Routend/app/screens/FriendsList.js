import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import {
  ExponentLinksView,
} from '@exponent/samples';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import DatePicker from 'react-native-datepicker';

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date:"2016-05-15"}
  }
  static route = {
    navigationBar: {
      title: 'Links',
    },
  }

    searchPressed() {
      console.log(this.props);
      this.props.fetchCoord();
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

        <Text>Hello</Text>
        <View>
        <TouchableHighlight onPress={ () => this.searchPressed() }>
        <Text>Fetch Recipes</Text>
        </TouchableHighlight>
        </View>
        <View>
        <Text>Count: {this.props.AppState.recipeCount}</Text>
        </View>
        <DatePicker
        style={{height: 2000, width: 150}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-12-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
            height: 25,
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />

      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    // backgroundColor: '#008ae6'
  },
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    AppState: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);