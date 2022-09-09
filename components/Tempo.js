import React from 'react';
import {StyleSheet, Text  } from 'react-native';

export default function components() {
 return (
   <>
   <Text style={StyleSheet.titulo}>Dados do tempo para hoje:</Text>
   <Text style={StyleSheet.texto}>Máx:</Text>
   <Text style={StyleSheet.texto}>Mín:</Text>
   <Text style={StyleSheet.texto}>Descrição:</Text>
   </>
  );
}
 
const styles = StyleSheet.create({
    titulo:{
        fontSize: 30
    },
    texto:{
        fontSize: 20
    }
})