import { StyleSheet } from 'react-native';

      
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
            color: "black", 
           
        },  
    
        BlackButton: { 
            height:100,
            width:300,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "green",
            borderBottomWidth: 1,    
            borderRadius: 10,   
            borderColor: "black", 
            marginBottom: 20, 
            marginLeft: "10%"   
        },  
       
        ButtonText: {
          color: 'white',
          fontSize: 42,
          lineHeight: 84,
          fontWeight: "bold",      
    },
       
    });