
import React, { useState } from 'react';
import { Button,Dimensions,ScrollView,StatusBar,StyleSheet, Text, View } from 'react-native';
import Form from './src/Form';
import Header from './src/Header';
import Logo from './src/Logo';
import Content from './src/Content';
import Register from './src/Register';

export default function App() {
  return (
  <>
   <StatusBar  hidden></StatusBar>
   <ScrollView >
 
  <View style={styles.outerView}>
  <Header/>
   <Logo/>
   <Content/>
   <Form/>
   <Register/>
  </View>   
   </ScrollView>
  </>
  );
}




const styles = StyleSheet.create({
 
  outerView: {
   
    backgroundColor: 'black',
    width:'100%',
    alignItems: 'center',
  
    padding:10

  },


});
