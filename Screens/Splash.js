import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Splash = () => {
  const navigation = useNavigation();

  const [Loding, setLoding] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1, justifyContent: "center" }}>
      <View style={{ alignItems: "center", justifyContent: "center", }}>
        <Text style={{ fontWeight: 'bold', fontSize: 30, shadowRadius: 2, shadowColor: "#000", shadowOpacity: 0.1 }}>ANDRE WEATHER APP</Text>
      </View>

      {Loding && (
        <ActivityIndicator style={{ top: 50 }} size='small' color="#000" />
      )}

    </SafeAreaView>
  )
}

export default Splash

const styles = StyleSheet.create({})
