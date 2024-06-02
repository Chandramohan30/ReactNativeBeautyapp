import React from 'react'
import {View,Text,StyleSheet,Image, ImageBackground,TouchableOpacity, FlatList} from "react-native";
export default function Register() {
  return (


    <View style={styles.outer}>
        <ImageBackground style={styles.imagebackground
        } source={require("./Images/background.jpg")} />
        <Text style={styles.head}>Why Should You Join Airblack ? </Text>
        <Text style={styles.para}>Are you a beauty enthusiast who dreams of creating stunning makeup looks?
         With Airblack, you can turn that dream into reality. Our courses are designed by top makeup artists who will teach you everything from basic techniques to advanced artistry. Let your creativity soar as you learn to transform faces into works of art.</Text>
             <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Apply Now</Text>
            </TouchableOpacity>
        <Text style={styles.head}> Get Certified from India's Biggest Beauty Platform</Text>
        <Text >THANK YOU VISITING US</Text>
    </View>
    

  )}
const styles=StyleSheet.create({
    para:{
        color:"black",
        padding:20,
        borderRadius:20,
        backgroundColor:'white'
        
    },
    features:{
    
        color:'white',
        borderWidth:2
    },
    card:{
        borderWidth:10,
        borderColor:'white'
    },
    button: {
        backgroundColor: 'yellow',
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
      },
      buttonText: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center', // Ensure text is centered
      },
    head:{
        color:"white",
        margin:20,
        fontSize:20
    },
    imagebackground:{
        width:300,
        height:200,
        backgroundColor:"white",
        marginLeft:20,
        borderRadius:20
    },
    outer:{
       
        borderWidth:20,
        marginTop:20,
        
    }
})
