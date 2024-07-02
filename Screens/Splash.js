import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkFirstTime = async () => {
      try {
        const isFirstTime = await AsyncStorage.getItem('isFirstTime');
        if (isFirstTime === null) {
          // First time user
          await AsyncStorage.setItem('isFirstTime', 'false');
          navigation.reset({
            index: 0,
            routes: [{ name: 'Signup' }],
          });
        } else {
          // Not the first time user
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          });
        }
      } catch (error) {
        console.error('Error checking first time user:', error);
      }
    };

    setTimeout(() => {
      checkFirstTime();
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1, justifyContent: "center" }}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontWeight: 'bold', fontSize: 30, shadowRadius: 2, shadowColor: "#000", shadowOpacity: 0.1 }}>
          ANDRE WEATHER APP
        </Text>
      </View>

      {loading && (
        <ActivityIndicator style={{ top: 50 }} size='small' color="#000" />
      )}
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({});
