import React from 'react'
import { View, Image, StyleSheet } from 'react-native';

 
const Barriers = ({barrierWight, barrierHeight, barriersLeft, gap, color, randomButton }) => {   
    

return (
    <>
        
        <View style={{
            
                    position: 'absolute',
                    backgroundColor: color,
                    width: barrierWight,
                    height: barrierHeight,
                    left: barriersLeft,
                    bottom: randomButton + barrierHeight + gap,
                }}/>
        
          

        <View style={{
                    position: 'absolute',
                    backgroundColor: color,
                    width: barrierWight,
                    height: barrierHeight,
                    left: barriersLeft,
                    bottom: randomButton,
                }}/>       
         
    </>
)} 

export default Barriers



