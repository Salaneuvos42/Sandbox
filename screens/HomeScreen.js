import { 
  StyleSheet, 
    ImageBackground, 
    Text, 
    View,
    Image,
    Pressable,
    StatusBar, 
  } from 'react-native';
  import { container } from "../Styles"

    
  const images = {uri: "https://images-assets.nasa.gov/image/PIA14728/PIA14728~medium.jpg"};
  
  const  HomeScreen = ({navigation}) => {
  
     
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor={"black"}/>
      <ImageBackground source={images} resizeMode="cover" style={styles.image}> 
      <Image style={styles.iconImage} source={require("../assets/capypara.png")}></Image>  
      <View> 
      <Text style={styles.subtitleText}>Tervetuloa</Text> 
      </View> 
      <View>   
      <Pressable 
          style={styles.BlackButton} 
          onPress = {() => navigation.navigate("Flappy")}>
        <Text style={styles.ButtonText}>Flappy</Text>
      </Pressable> 
      <Pressable 
          style={styles.PepsiButton} 
          onPress = {() => navigation.navigate("PepsiApp")}>
        <Text style={styles.PepsiButtonText}>PepsiApp </Text>
      </Pressable> 
      </View>
      </ImageBackground>
    </View>
  );
  }
  export default HomeScreen;

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

    PepsiButton: { 
        height:100,
        width:250,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00008b",
        borderBottomWidth: 0.5,    
        borderRadius: 10,   
        borderColor: "black",
        marginLeft: "20%"     
    },
    
    ButtonText: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",      
    },
    
    PepsiButtonText: {
      color: '#dc143c',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",      
    },
    image: {
      height:"100%",
      width:"100%",
    },

    iconImage: {
      height:250, 
      width:250, 
      marginLeft: "20%", 
      marginVertical:"10%"
    },   
});
  
