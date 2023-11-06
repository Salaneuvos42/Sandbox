import React from 'react';
import { StyleSheet, Image } from 'react-native';
import player from "./assets/player.png"


const Player = ({playersBottom, playersLeft, }) => {
  
    const playerWidth = 100
    const playerHeight = 60

    return (
        <Image style={{            
            position: 'absolute',
            width: playerWidth,
            height: playerHeight,
            left: playersLeft - (playerWidth/2),
            bottom: playersBottom - (playerHeight/2),
            
        }} 
            source={player} />           

          
    )}
    
      
export default Player


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center",            
      },

    
    image: {
      height:"100%",
      width:"100%",
    },
   
});


