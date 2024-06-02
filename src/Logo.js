import { StyleSheet,Text,View ,Dimensions,Image} from "react-native"
export default function Logo() {
  return (
    <View style={styles.cardContainer}>
    <Image source={require('./Images/beauty.jpg')} style={styles.imagestyle}/>
    </View>
  )
}
const devicewidth=Math.round(Dimensions.get('window').width)
const radius=20;
const styles=StyleSheet.create({
    cardContainer:{
        width:devicewidth-40,backgroundColor:'black',
       
    },
    imagestyle:{
    height:200,
    width:devicewidth-50,
    borderRadius:'50%'
    
    },
  
})
