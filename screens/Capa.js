 import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../assets/logo.png';
//=======================================================================================
export default function CapaScreen({navigation}) {

  return (
  <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#d9b6f3', '#350368']}
        style={styles.background}
      />
      <LinearGradient
        // Button Linear Gradient
        colors={['#4c669f', '#3b5998', '#192f6a']}>

      </LinearGradient>

      <TouchableOpacity
       style={styles.buttonlogo} 
       activeOpacity={0.5}
       onPress={() => navigation.navigate('Login')}> 
  
       <Image 
         source={require('../assets/logo.png')}
          
       />

       <Text style={styles.slogan}>
       Na medida certa {'\n'}para uma vida saudável
       </Text> 

      </TouchableOpacity>
    </View>
  </SafeAreaView>
  );
}
 
//==========================================================================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },

  buttonlogo: {
    justifyContent: 'center',
    alignItems: 'center',

  },

  slogan: {
    color: "white",
    fontSize: 16,
    marginTop: 20,
    textAlign: "center",

  }

});

