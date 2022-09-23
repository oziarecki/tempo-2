import React from 'react';
import {StyleSheet, Text  } from 'react-native';

export default function Tempo(props) {
 return (
   <>
   <Text style={StyleSheet.titulo}>Dados do tempo para hoje:</Text>
   <Text style={StyleSheet.texto}>Máx:{props.previsao.max}</Text>
   <Text style={StyleSheet.texto}>Mín:{props.previsao.min}</Text>
   <Text style={StyleSheet.texto}>Descrição:{props.previsao.description}</Text>
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