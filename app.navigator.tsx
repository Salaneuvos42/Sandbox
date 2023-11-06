import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen"

const {Navigator, Screen} = createNativeStackNavigator(); 

const appNavigator = () => (
    <NavigationContainer>
        <Navigator initialRouteName='home'>
            <Screen name="home" component={HomeScreen}></Screen>
        </Navigator>
    </NavigationContainer>

)
export default appNavigator;