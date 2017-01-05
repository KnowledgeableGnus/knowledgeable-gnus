import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import {
  ExponentLinksView,
} from '@exponent/samples';
import Button from 'react-native-button';
import AreaSpline from './js/charts/AreaSpline';
import Pie from './js/charts/Pie';
import Theme from './js/theme';
import data from './resources/data';

export default class LinksScreen extends React.Component {
  // static route = {
  //   navigationBar: {
  //     title: 'Links',
  //   },
  // }

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      spendingsPerYear: data.spendingsPerYear,
    };
    this._onPieItemSelected = this._onPieItemSelected.bind(this);
    this._shuffle = this._shuffle.bind(this);
  }

  _onPieItemSelected(newIndex){
    this.setState({...this.state, activeIndex: newIndex, spendingsPerYear: this._shuffle(data.spendingsPerYear)});
  }

  _shuffle(a) {
      for (let i = a.length; i; i--) {
          let j = Math.floor(Math.random() * i);
          [a[i - 1], a[j]] = [a[j], a[i - 1]];
      }
      return a;
  }

  render() {
    const height = 200;
    const width = Dimensions.get('window').width;

    return (
      <ScrollView>
        <View style={styles.container} >
          <Text style={styles.chart_title}>Distribution of time spent today</Text>
          <Pie
            pieWidth={150}
            pieHeight={150}
            onItemSelected={this._onPieItemSelected}
            colors={Theme.colors}
            width={width}
            height={height}
            data={data.spendingsLastMonth} />
          <Text style={styles.chart_title}>Spending per year in {data.spendingsLastMonth[this.state.activeIndex].name}</Text>
          <AreaSpline
            width={width}
            height={height}
            data={this.state.spendingsPerYear}
            color={Theme.colors[this.state.activeIndex]} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'whitesmoke',
    marginTop: 21,
  },
  chart_title : {
    paddingTop: 15,
    textAlign: 'center',
    paddingBottom: 5,
    paddingLeft: 5,
    fontSize: 18,
    backgroundColor:'white',
    color: 'grey',
    fontWeight:'bold',
  }
});

      // <View>
      //   <TouchableOpacity onPress={() => {console.log('route', route, 'props', props) } }><View style={{top: 16, left: 15}}><Text style={{fontSize: 12}}>Go Back</Text></View></TouchableOpacity>
      // </View>
