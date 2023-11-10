import { useState } from "react";
import { 
    StyleSheet, 
    Text, 
    View,
    Pressable, 
    StatusBar,
    Modal,
  } from "react-native";
  
  
const  PepsiApp = ({navigation}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const noupOpen = () => setModalOpen(true);
    const noupHide = () => setModalOpen(false);


    return (
        <View style={styles.container}>
        <StatusBar backgroundColor={"blue"}/>
        <Text style={styles.titleText}>Onko liikkeessa pepsiä tarjolla</Text>
        <View style = {{flexDirection: "row", justifyContent: "space-around"}}>    
        <Pressable style={styles.YesButton} onPress = {() => {}}>           
            <Text style={styles.ButtonText}>Kyllä</Text>
        </Pressable>
        <Modal visible={modalOpen} animationType="slide">
        <View style={styles.container}>
        <Text style={{fontSize: 25, marginLeft: 20}}>Ei hyvä, kaippa siellä on enemmän Coca Cola:n juojia.</Text>
        <Pressable style={styles.backButton} onPress = {noupHide}>
            <Text style={styles.ButtonTextBlack}>Takaisin</Text>    
        </Pressable> 
        </View>     
        </Modal>
        <Pressable style={styles.NoButton} onPress = {noupOpen} >
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
        fontWeight: "bold",
        textAlign: "center", 
        color: "black",
        marginBottom:30 
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

    backButton: { 
        height:150,
        width:200,
        backgroundColor: "white",      
        marginBottom: "30",
        marginLeft: "35%" 
    },  
    
    ButtonText: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",      
    }, 

    ButtonTextBlack: {
        color: 'black',
        fontSize: 30,
        lineHeight: 84,
        alignItems: "center",     
    }, 
  });