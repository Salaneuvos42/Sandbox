import React from 'react'
import { Image } from 'react-native';
import pipe1 from "./assets/pipe1.png";
import pipe2 from "./assets/pipe2.png";


 
const Barriers = ({barrierWight, barrierHeight, barriersLeft, gap, color, randomButton }) => {   
    

return (
    <>
        
        <Image style={{
            
                    position: 'absolute',
                    width: barrierWight,
                    height: barrierHeight,
                    left: barriersLeft,
                    bottom: randomButton + barrierHeight + gap,
                }}  source={pipe2} 
                    resizeMode="cover"
                />   
        
          

        <Image style={{
                    position: 'absolute',
                    width: barrierWight,
                    height: barrierHeight,
                    left: barriersLeft,
                    bottom: randomButton,
                }}  source={pipe1}
                    resizeMode="cover" />                  
         
    </>
)} 

export default Barriers



