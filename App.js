import React, {Component} from 'react';
import {AppRegistry, StatusBar, Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { fetchWeather } from './weather-api'

const iconNames = {
	Default: 'md-time',
	Clear: 'md-sunny',
	Rain: 'md-rainy',
	Thunderstorm: 'md-thunderstorm' ,
	Clouds: 'md-cloudy' ,
	Snow: 'md-snow' ,
	Drizzle: 'md-umbrella' ,
  Mist: 'md-partly-sunny'
}

const phrases = {
	Default: {
		title: "Fetching the Fucking Weather",
		subtitle: "Be patient, you're witnessing a miricle",
		highlight: "Fucking",
		color: "#636363",
		background: "#9C9C9C"
	},
	Clear: {
		title: "It's Fucking Amaze Balls",
		subtitle: "Rock that shit!",
		highlight: "Fucking",
		color: "#E32500",
		background: "#FFD017"
	},
	Rain: {
		title: "Rain rain please go away",
		subtitle: "Stay inside and code all day",
		highlight: "away",
		color: "#004A96",
		background: "#2F343A"
	},
	Thunderstorm: {
		title: "Fucking Thunder Strike",
		subtitle: "Unplug those devices",
		highlight: "Thunder",
		color: "#FBFF46",
		background: "#020202"
	},
	Clouds: {
		title: "Cloud storage limit reached",
		subtitle: "error: 5000 - cirrocumulus",
		highlight: "limit",
		color: "#0044FF",
		background: "#939393"
	},
	Snow: {
		title: "Brain Fucking Freeze",
		subtitle: "You're not supposed to eat it",
		highlight: "Fucking",
		color: "#021D4C",
		background: "#15A678"
	},
	Drizzle: {
		title: "Meh... don't even ask",
		subtitle: "What did I just say?",
		highlight: "don't",
		color: "#B3F6E4",
		background: "#1FBB68"
	},
	Mist: {
		title: "Mist title",
		subtitle: "Mist sub",
		highlight: "Mist",
		color: "#B3F6E4",
		background: "#1FBB68"
	},
}

class App extends Component {
    constructor() {
      super()
      this.state = {
        temp: 0,
        weather: 'Default'
      }
    }
  

  componentDidMount() {
    this.getLocation()
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(
      (posData) => fetchWeather(posData.coords.latitude,posData.coords.longitude)
      .then(res => this.setState({temp: res.temp, weather: res.weather})),
      (error) => console.log(error),
      {timeout: 10000}
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon name={iconNames[this.state.weather]} size={70} color={'white'}/>
          <Text style={styles.temp}>{this.state.temp}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>build a 
            <Text style={{color: 'red'}}> fucking</Text> 
          weather app.</Text>
          <Text style={styles.subtitle}>Let's make it rain!</Text>
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFD017',
    },
    header: {
      alignItems: 'center', 
      justifyContent: 'space-around', 
      flex: 1, 
      flexDirection: 'row',
      margin: 20,
    },
    body: {
      alignItems: 'flex-start', 
      justifyContent: 'flex-end', 
      flex: 5, 
      // backgroundColor: 'blue',
      margin: 20,
    },
    temp: {
      fontFamily: 'HelveticaNeue-Bold',
      fontSize: 45,
      color: 'white',
    },
    title: {
      fontFamily: 'HelveticaNeue-Bold',
      fontSize: 78,
      color: 'white',
      marginBottom: 5,
    },
    subtitle: {
      fontFamily: 'HelveticaNeue-Medium',
      fontSize: 16,
      color: 'white',

    },

})