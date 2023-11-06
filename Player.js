import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Player = ({playersBottom, playersLeft}) => {
  
    const playerWidth = 100
    const playerHeight = 60

    return (
        <View style={{
            backgroundColor: "green",
            position: 'absolute',
            width: playerWidth,
            height: playerHeight,
            left: playersLeft - (playerWidth/2),
            bottom: playersBottom - (playerHeight/2),
        }}/>
    )}
      
export default Player



