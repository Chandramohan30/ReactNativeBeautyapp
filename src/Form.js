import { Text,View,TextInput, StyleSheet,Button,TouchableOpacity} from "react-native";
export default function Form()
{
    return(
      
        <View style={styles.outercontainer}>
        <Text style={styles.head}>FILL THE FORM BELOW TO ENQUIRE</Text>
        <Text style={styles.label}>*Enter your name</Text>
         <TextInput placeholder="Eg:Aneesha Mehra" style={styles.input}></TextInput>
         <Text style={styles.label}>*Enter your Whatsapp Number</Text>
         <TextInput placeholder="Eg.0000000000" style={styles.input}></TextInput>
         <Text style={styles.label}>*Select your Profession </Text>
         <TextInput placeholder="Choose the most relevant option" style={styles.input}></TextInput>
         <Text style={styles.label}>*Select your goal </Text>
         <TextInput placeholder="Choose the most relevant option"  style={styles.input}></TextInput>
         <Text style={styles.label}>*Select your City </Text>
         <TextInput placeholder="Choose the most relevant option"  style={styles.input}></TextInput>
         <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
       
        
    );
}
const styles=StyleSheet.create({
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
    input:{
    borderColor:'black',
    borderWidth:1,
    padding:10,
    borderRadius:10,
    color:'white'
    },
    label:{
        padding:8,
        
        color:'black'
    },
    head:{
        color:'black',
       backgroundColor:'#FFFF00',
       padding:9,
       borderRadius:10,
       
    },
    outercontainer:{
        backgroundColor:'white',
        padding:30,
        borderRadius:10,
        borderwidth:6,
        width:360,
        margin:4
        
    }
})