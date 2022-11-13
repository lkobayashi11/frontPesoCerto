import * as React from 'react';
import { Button, View, Text, ScrollView, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaView, StyleSheet, TextInput, text, NumberInput, number, container, Alert, TouchableOpacity } from "react-native";

export default function HistoricoScreen({ navigation }) {

  return (
  <SafeAreaView style={styles.container}>
  
        <Text style={styles.parabens}>PARABÉNS! {'\n'}SEU PESO ESTÁ IDEAL</Text>

        <Text style={styles.texto}>MEU HISTÓRICO</Text>

         <ScrollView style={styles.scrollView}>
        <Text style={styles.historico}>Espaço reservado para históricopppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp</Text>
        </ScrollView> 
    
  </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eefeff",
    alignItems: "center",
    justifyContent: "center",
    padding: 100,
    width: '100%',
    height: '100%'

  },

  parabens: {
    width:237,
    height:86,
    backgroundColor:"#4accda",
    justifyContent: "center",
    alignItems: "center",
    borderRadius:7,
    color: "white",
    textAlign: "center",
    paddingVertical: 25,
    fontWeight: "bold"

  },

  texto: {
    marginTop:61,
    color: "black",
    fontWeight: "bold",
    marginBottom: 7

  },

    historico: {
    color: "white",
    textAlign: "center",
    padding: 7,
  },

    scrollView: {
    marginHorizontal: 20,
    backgroundColor:"#4accda",
    width: 237,
    borderRadius:7,
    padding: 7,

  },
  limitador: {
    height: 150,
  }

});