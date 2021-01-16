import React from 'react';
import Loading from "./Loading";
import * as Location from 'expo-location';
import {Alert} from "react-native";
import axios from 'axios';
import Weather from "./Weather";

const API_KEY = "7140eca5651e51e34023835eb6349685";

export default class extends React.Component {
  state ={
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const {
      data:{
        main: {temp},
        weather,
        name
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
      this.setState({
        isLoading:false,
        condition: weather[0].main, 
        temp,
        name: name
      });
    };
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();      
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Error", "Please allow the permission");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const {isLoading, condition, temp, name} =this.state; 
      return isLoading ? <Loading /> : <Weather temp ={Math.round(temp)} condition={condition} name={name}/>;
  }
}

