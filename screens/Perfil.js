import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import React, { useState, useEffect, Component} from 'react';
import { Button, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DatePicker from 'react-native-datepicker';
import { SafeAreaView, TextInput, text, NumberInput, Number, number, container, Alert, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform } from "react-native";


//==========================================================================================


export default function PerfilScreen({ navigation }) {

   const [peso, setPeso] = useState("");

const [currentDate, setCurrentDate] = useState('');
 
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year 
      + ' ' + hours + ':' + min + ':' + sec
    );
  }, []);

    return (
    <KeyboardAvoidingView behavior={ Platform.OS === "android" ? "padding" : "height"} style={styles.container}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     <SafeAreaView style={styles.container}>
      <View style={styles.container}> 
         <Text style={styles.areaperfil}>
         Área reservada para dados do perfil
         </Text>

         <Text style={styles.textStyle}>
            {currentDate}
          </Text>
        
        <TextInput 
        style={styles.TextInput}  
        onChangeNumber={number=>setPeso(number)}
        placeholder="Digite seu peso"
        keyboardType="numeric"/>

        <TouchableOpacity
       style={styles.Botao1} 
       activeOpacity={0.5}
       onPress={() => navigation.navigate('Historico')}>
       <Text style={{color: "white"}} >
       Enviar
       </Text>
      </TouchableOpacity>
      
      </View>
     </SafeAreaView>
     </TouchableWithoutFeedback>
     </KeyboardAvoidingView>
    )
}
//====================================================================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eefeff",
    alignItems: "center",
    justifyContent: "center", 
    padding:18,
    width: "100%"
  },
  TextInput: {
    width:"100%",
    height:40,
    backgroundColor:"white",
    borderRadius:7,
    paddingLeft:10,
    borderWidth:1.5,
    marginBottom:20,
    marginTop:10,
  },
  Botao1: {
    width:"30%",
    height:40,
    backgroundColor:"#4accda",
    justifyContent: "center",
    alignItems: "center",
    borderRadius:7,

  },
  areaperfil: { 
    marginBottom: 100,
    width:"80%",
    height:220,
    backgroundColor:"#ffffff",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    paddingTop: 100,
    textAlign: "center",
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
  },


}); 
