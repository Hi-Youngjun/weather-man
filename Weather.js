import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {LinearGradient} from 'expo-linear-gradient';

const weatherOption ={
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "It's so haze"
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#4B79A1","#283E51"],
        title: "Pikachu",
        subtitle: "Stay at home"
    },
    Drizzle: {
        iconName: "weather-tornado",
        gradient: ["#BA8B02","#181818"],
        title: "Drizzle",
        subtitle: "Not too bad to go outside"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#24C6DC","#514A9D"],
        title: "So raining",
        subtitle: "Grab an umbrella"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#c0c0aa","#1cefff"],
        title: "Shit in the sky",
        subtitle: "Let's remove this shit"
    },
    Atmosphere: {
        iconName: "weather-cloudy-alert",
        gradient: ["1cefff","c0c0aa"],
        title: "Nothing special",
        subtitle: "Remind yourself"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#c0392b","#8e44ad"],
        title: "It's sunny",
        subtitle: "Let's go picnic"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7","#2c3e50"],
        title: "Cloudy gloomy",
        subtitle: "Let's do something fun"
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#C9D6FF","#E2E2E2"],
        title: "Foggy",
        subtitle: "Safe drive"
    }
};

export default function Weather({temp, condition, name}){
    return (
    <LinearGradient
        colors={weatherOption[condition].gradient}
        style={styles.container}
      >
          <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
            <Text style={styles.locationText}>Here is {name}</Text>
            <MaterialCommunityIcons 
            size={80} 
            color="white" 
            name={weatherOption[condition].iconName}>
            </MaterialCommunityIcons>
            <Text style={styles.tempText}>{temp}℃</Text>
        </View>

        <View style={{...styles.halfContainer, ...styles.textContainer}}>
            <Text style={styles.title}>{weatherOption[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOption[condition].subtitle}</Text>
        </View>
    </LinearGradient>
    );
}

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere",
        "Clear", 
        "Clouds",
        "Haze",
        "Mist"
    ]).isRequired,
    name: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    halfContainer: {
        flex:1,
        justifyContent: "center",
        alignItems: 'center'
    },
    tempText: {
        fontSize: 30,
        color: "white"
    },
    locationText: {
        fontSize: 25,
        color: "white"
    },
    title: {
        color:"white",
        fontWeight:"300",
        fontSize: 40,
        marginBottom: 10
    },
    subtitle: {
        color:"white",
        fontWeight: "600",
        fontSize:25
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});