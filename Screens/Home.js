import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Splash from './Splash'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const Home = () => {

  const [city, setCity] = useState();
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fd57077d052c9fd0c9d5901cad356d0e&units=metric`);
      setWeather(response.data);
    } catch (error) {
      alert('Somthing Wrong please check if you write correct')
      console.log(error);
    }
  }

  const renderWeatherIcon = () => {
    if (!weather) return null;
    const weatherMain = weather.weather[0].main.toLowerCase();

    switch (weatherMain) {
      case 'clear':
        return <Feather name="sun" size={50} color="#fff" />;

      case 'rain':
        return <FontAwesome5 name="cloud-moon-rain" size={50} color="#fff" />

      case 'clouds':
        return <FontAwesome5 name="cloud" size={50} color="#fff" />

      default: return null;
    }

  }






  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ alignItems: "center", justifyContent: "center", padding: 16 }}>
        <Text style={styles.title}>Andre Weather App</Text>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TextInput
          style={styles.input}
          placeholder='Please enter your city name '
          value={city}
          onChangeText={setCity}
        />
      </View>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View style={{ width: 150, height: 35, backgroundColor: "#000", borderRadius: 15, alignItems: "center", }}>
          <TouchableOpacity onPress={getWeather} style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
            <Text style={{ color: "white", fontSize: 15, fontWeight: "500", textAlign: "center" }}>Get Weather Details</Text>
          </TouchableOpacity>
        </View>
      </View>



      {weather && (
        <View style={{ justifyContent: "center", alignItems: "center", top: 150, }}>

          <View style={{ height: 250, width: 200, backgroundColor: "#1F1E1E", justifyContent: "center", alignItems: "center", borderRadius: 15, shadowColor: '#000', shadowOffset: 1, shadowOpacity: 1 }}>
            <View style={{ padding: 16 }}>
              {renderWeatherIcon()}
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", gap: 10 }}>
              <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>{weather.weather[0].main}</Text>
              <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>{weather.main.temp} °C</Text>
            </View>
          </View>
        </View>
      )}

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",


  },
  input: {
    width: '80%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 15,
    fontSize: 16,
    fontWeight: "600",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"

  }



})