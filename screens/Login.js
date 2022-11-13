import * as React from 'react';
import {useState}from 'react';
import { Button, View, Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaView, StyleSheet, TextInput, text, NumberInput, number, container, Alert, TouchableOpacity } from "react-native";

export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
  <SafeAreaView style={styles.container}>
    <View style={styles.container}>

         <TextInput 
        style={styles.TextInput}  
        onChangeText={text=>setEmail(text)}
        placeholder="Digite seu email"/>

         <TextInput 
        secureTextEntry={true}
        style={styles.TextInput}  
        onChangeText={text=>setSenha(text)}
        placeholder="Digite sua senha"
         />

        <TouchableOpacity style={styles.Botao1} onPress={()=>navigation.navigate('Perfil')}>
          <Text style={{color: "white"}} > Login </Text>
        </TouchableOpacity>

        <Text style={styles.texto}>Não é Cadastrado?</Text>

         <TouchableOpacity
       style={styles.Botao2} 
       activeOpacity={0.5}
       onPress={() => navigation.navigate('Cadastro')}>
       <Text style={{color: "white"}} >
       Cadastre-se aqui
       </Text>
      </TouchableOpacity>
         
    </View>
  </SafeAreaView>
//não esquecer de mudar variável do botão 2.
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eefeff",
    alignItems: "center",
    justifyContent: "center",
    padding:27,
    width: '100%',
  },
  TextInput: {
    width:"100%",
    height:40,
    backgroundColor:"white",
    borderRadius:7,
    paddingLeft:10,
    borderWidth:1.5,
    marginBottom:20,
  },
  Botao1: {
    width:"30%",
    height:40,
    backgroundColor:"#4accda",
    justifyContent: "center",
    alignItems: "center",
    borderRadius:7,

  },

  texto: {
    marginTop:100,
  },

    Botao2: {
    width:"80%",
    height:40,
    backgroundColor:"#4accda",
    justifyContent: "center",
    alignItems: "center",
    borderRadius:7,

  }
});