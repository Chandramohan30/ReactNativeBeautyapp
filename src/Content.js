import React from 'react'
import { View,Text,StyleSheet } from "react-native"

export default function Content() {
    
  return (
   
    <View>
        <Text style={styles.theme}>
            Professional Online
            Makeup Course
        </Text>
        <Text style={{fontSize:10,color:"whitesmoke",backgroundColor:"#7f7f7f",width:200,marginLeft:10,padding:10,borderRadius:7}}>Certification Programme</Text>
<Text style={styles.rate}>Rated 4.85/5</Text>    
<Text style={styles.list}>&#x2713; India's No.1 Online Makeup Course</Text>
<Text style={styles.list}>&#x2713; Learn by Live Do-it-Together Classes</Text>
<Text style={styles.list}>&#x2713; Unlimited Practise Session to master skills</Text>


    </View>
  )
}
const styles=StyleSheet.create({
    theme:{
        color:"white",
        fontSize:20,
        margin:10,
        
    },
    rate:{
        color:"yellow",
        textAlign:"right",
        position:'relative',
        bottom:30
    }
,list:{
    color:"white",
    margin:10,
}

})
