import * as React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, TextInput, NumberInput, number, container, Alert, TouchableOpacity, Platform, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, } from "react-native";
import { StatusBar } from 'expo-status-bar';

import api from '../services/api';
//================================================================================

export default function CadastroScreen({ navigation }) {

//conecta com o Back-End
 const [nome, setNome] = useState("");
 const [sobrenome, setSobrenome] = useState("");
 const [nascimento, setNascimento] = useState("");
 const [sexo, setSexo] = useState("");
 const [altura, setAltura] = useState("");
 const [email, setEmail] = useState("");
 const [senha, setSenha] = useState("");

 function cadastro() {
    try {
        const response = api.post('cadastrarUsuario',
            {
                Nome: nome,
                Sobrenome: sobrenome,
                Nascimento: nascimento,
                Sexo: sexo,
                Altura: altura,
                Email: email,
                Senha: senha
            });

            setNome("");
            setSobrenome("");
            setNascimento("");
            setSexo("");
            setAltura("");
            setEmail("");
            setSenha("");

        navigation.goBack();

    } catch (error) {

  }
}

  return (

   <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <TextInput 
        style={styles.TextInput}  
        onChangeText={text=>setNome(text)}
        placeholder="Digite seu nome"
        value={nome}/>

      <TextInput 
        style={styles.TextInput}  
        onChangeText={text=>setSobrenome(text)}
        placeholder="Digite seu sobrenome"
        value={sobrenome}/> 

      <TextInput 
        style={styles.TextInput}  
        onChangeNumber={number=>setNascimento(number)}
        placeholder="Digite sua data de nascimento"
        keyboardType="numeric"
        value={nascimento}/>

      <TextInput 
        style={styles.TextInput}  
        onChangeText={text=>setSexo(text)}
        placeholder="Digite seu sexo"
        value={sexo}/>

      <TextInput 
        style={styles.TextInput}  
        onChangeNumber={number=>setAltura(number)}
        placeholder="Digite sua altura"
        keyboardType="numeric"
        value={altura}/>

      <TextInput 
        style={styles.TextInput}  
        onChangeText={text=>setEmail(text)}
        placeholder="Digite seu email"
        value={email}/>

      <TextInput 
        secureTextEntry={true}
        style={styles.TextInput}  
        onChangeText={text=>setSenha(text)}
        placeholder="Digite sua senha"
        value={senha}/>
            
    </View>
    <View style={styles.container}>
                <Button style={styles.btnCadastro} onPress={() => cadastro()} title="Salvar" ></Button>
                <StatusBar style="auto" />
    </View>
   </SafeAreaView>

  );
}
//=======================================================================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eefeff",
    alignItems: "center",
    justifyContent: "center",
    padding:27,
    width:"100%",
  },
  TextInput: {
    width:"100%",
    height:39,
    backgroundColor:"white",
    borderRadius:7,
    paddingLeft:10,
    borderWidth:1.5,
    marginBottom:10,

  },

  Botao1: {
    width:"30%",
    height:40,
    backgroundColor:"#4accda",
    justifyContent: "center",
    alignItems: "center",
    borderRadius:7,
  },

});