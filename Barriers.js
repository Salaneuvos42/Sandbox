import React from 'react'
import { Image } from 'react-native';
import pipe1 from "./assets/pipe1.png"


 
const Barriers = ({barrierWight, barrierHeight, barriersLeft, gap, color, randomButton }) => {   
    

return (
    <>
        
        <Image style={{
            
                    position: 'absolute',
                    backgroundColor: color,
                    width: barrierWight,
                    height: barrierHeight,
                    left: barriersLeft,
                    bottom: randomButton + barrierHeight + gap,
                    borderRadius: 10,
                }}  source={pipe1} />   
        
          

        <Image style={{
                    position: 'absolute',
                    backgroundColor: color,
                    width: barrierWight,
                    height: barrierHeight,
                    left: barriersLeft,
                    bottom: randomButton,
                    borderRadius: 10,
                }} source={pipe1} />      
         
    </>
)} 

export default Barriers



