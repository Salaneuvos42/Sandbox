import { 
    StyleSheet, 
    Text, 
    View,
    Pressable, 
    StatusBar,
  } from "react-native";
  

  
const  PepsiApp = ({navigation}) => {
    return (
        <View style={styles.container}>
        <StatusBar backgroundColor={"blue"}/>
        <View style = {{flexDirection: "row", justifyContent: "space-around"}}>    
        <Pressable style={styles.YesButton} onPress = {() => {}}>           
            <Text style={styles.ButtonText}>Kyllä</Text>
        </Pressable>
        <Pressable style={styles.NoButton} onPress = {() => {}}>
        <Text style={styles.ButtonText}>Ei</Text>
        </Pressable>
        </View>
        </View>
    )};
export default PepsiApp;


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center",            
      },

    titleText: {
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center", 
        color: "#ff0000" 
    },  

    subtitleText: {
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center", 
        color: "white", 
       
    },  

    YesButton: { 
        height:150,
        width:150,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
        borderBottomWidth: 1,    
        borderRadius: 10,   
        borderColor: "black", 
        marginBottom: "30"    
    },

    NoButton: { 
        height:150,
        width:150,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        borderBottomWidth: 0.5,    
        borderRadius: 10,   
        borderColor: "black",
        marginBottom: "30"     
    },
    
    ButtonText: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",      
}, 
  });