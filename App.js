import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen"
import PepsiApp from "./screens/PepsiApp";
import Game from "./screens/Game";
import Flappy from "./screens/Flappy"

const image = {uri: 'https://images-assets.nasa.gov/image/PIA14728/PIA14728~medium.jpg'};
const Stack = createNativeStackNavigator()

const  App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen  
            name="Home" 
            component={HomeScreen}
            options={{headerBackVisible: false
            }}  
            />
          <Stack.Screen  
            name="PepsiApp" 
            component={PepsiApp}
            options={{headerBackVisible: false}}  
            />
          <Stack.Screen  
            name="Flappy" 
            component={Flappy}
            options={{headerBackVisible: false}}  
            />
            <Stack.Screen  
            name="Game" 
            component={Game}
            options={{headerBackVisible: false}}  
            />


      </Stack.Navigator>
    </NavigationContainer>
);
}
export default App;
