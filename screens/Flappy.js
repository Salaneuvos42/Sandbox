import { 
    StyleSheet, 
      ImageBackground, 
      Text, 
      View,
      Image,
      Pressable,
      StatusBar, 
    } from 'react-native';
    import Background from "../assets/background.png"
    import player from "../assets/player.png"
  
    
    const  Flappy = ({navigation}) => {
    
       
      return (
        <View style={styles.container}>
        <ImageBackground style={styles.container} source={Background} > 
        <Text style={styles.subtitleText}>Flappy Game</Text>      
        <View> 
        <Image style={{ height:150, width: 200, marginLeft: "25%", marginBottom:20 }} source={player} />
        </View> 
        <View style={{marginLeft: "25%"}}>   
        <Pressable 
            style={styles.GreenButton} 
            onPress = {() => navigation.navigate("Game")}>
          <Text style={styles.ButtonText}>Start</Text>
        </Pressable> 
        <Pressable 
            style={styles.BlackButton} 
            onPress = {() => navigation.navigate("Home")}>
          <Text style={styles.ButtonText}>Exit</Text>
        </Pressable> 
        </View>
        </ImageBackground>
        </View>
        
      )};  
    
   
    export default Flappy;
  
    const styles = StyleSheet.create({
      container: {
          flex: 1, 
          justifyContent: "center",            
        },

      playerIcon: {
          height:150,
          width: 200,
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
  
      GreenButton: { 
          height:100,
          width:150,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "green",
          borderBottomWidth: 1,    
          borderRadius: 10,   
          borderColor: "black", 
          marginBottom: 20, 
          marginLeft: "10%",  
      }, 

      BlackButton: { 
        height:100,
        width:150,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
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