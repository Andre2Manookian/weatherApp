// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Splash from '../Screens/Splash';
import Signup from '../Auth/Signup';
import Login from '../Auth/Login';



const Stack = createNativeStackNavigator();

function App() {






  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>



        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;