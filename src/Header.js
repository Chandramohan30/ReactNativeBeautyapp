import {View,StyleSheet,Text} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Header()
{
    return(
        
            <Text style={styles.outerdiv} >Airblack:The Assignment</Text>
        
    )
}
const styles=StyleSheet.create({
    outerdiv:{
     backgroundColor:'black',
     color:'white',
     width:'100%',
     padding:20,
     textAlign:'center',
     fontSize:20
    }

})