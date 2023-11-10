import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, Image, } from 'react-native';
import  Player  from "../Player";
import Barriers from "../Barriers";
import background from "../assets/background.png"
import { StatusBar } from 'expo-status-bar';


export default function Game() {

    const screenWidth = Dimensions.get("screen").width
    const screenHeight = Dimensions.get("screen").height
    const playersLeft = screenWidth / 2
    const [score, setScore] = useState(0) 
    const [playersBottom, setPlayersBottom] = useState(screenHeight / 2)
    const [barriersLeft, setBarrierLeft] = useState(screenWidth)
    const [barriersLeftTwo, setBarrierLeftTwo] = useState(screenWidth + screenWidth/2 + 30)
    const [obstaclesNegHeight, setObstaclesNegHeight] = useState(0)
    const [obstaclesNegHeightTwo, setObstaclesNegHeightTwo] = useState(0) 
    const gravity = 3
    const barrierWight = 65  
    const barrierHeight = 400
    const gap = 200 
    const [IsGameOver, setIsGameOver  ] = useState(false)   
    let gameTimerID 
    let barriersLeftTimerId
    let barriersLeftTimerIdTwo
    

    
    
    // Start point
    
    useEffect(() => {
        if (playersBottom > 0) {
            gameTimerID = setInterval(() => {
                setPlayersBottom(setPlayersBottom => setPlayersBottom - gravity)

            }, 30 )
            return () => { 
            clearInterval(gameTimerID) 

            }
          }
        }, [playersBottom])
        console.log(playersBottom)

        const jump = () => {
        const screenHeight = Dimensions.get("screen").height
            if (!IsGameOver && (playersBottom < screenHeight)) {
                setPlayersBottom(playersBottom => playersBottom + 50)
                console.log("Jump") 
            }
        }

    // First barrier
    useEffect(() => { 
         if (barriersLeft > - 60) {
            barriersLeftTimerId = setInterval(() => {
                setBarrierLeft(barriersLeft => barriersLeft - 5)
            }, 30 )
            return () => { 
                clearInterval(barriersLeftTimerId)
            }
           } else {
            setBarrierLeft(screenWidth)
            setObstaclesNegHeight( - Math.random() * 100)
            setScore(score => score + 2)
           }
       }, [barriersLeft])

    // Second barrier
    useEffect(() => { 
        if (barriersLeftTwo > - 60) {
           barriersLeftTimerIdTwo = setInterval(() => {
               setBarrierLeftTwo(barriersLeftTwo => barriersLeftTwo - 5)
           }, 30 )
           return () => { 
               clearInterval(barriersLeftTimerIdTwo)
           }
          } else {
           setBarrierLeftTwo(screenWidth)
           setObstaclesNegHeightTwo( - Math.random() * 100)
           setScore(score => score + 2)
          }
      }, [barriersLeftTwo])

    // check for collesion
    
    useEffect(() => { 
        if ( 
            ((playersBottom < (obstaclesNegHeight + barrierHeight + 30 ) || 
            playersBottom > (obstaclesNegHeight + barrierHeight + gap - 30 )) &&
            (barriersLeft > screenWidth/2 - 30 && barriersLeft < screenWidth/2 + 30 ) 
            ||
            ((playersBottom < (obstaclesNegHeightTwo + barrierHeight +30 )) || 
            playersBottom > (obstaclesNegHeightTwo + barrierHeight + gap - 30 )) &&
            (barriersLeftTwo > screenWidth/2 - 30 && barriersLeftTwo < screenWidth/2 + 30 ) 
            ) 
            )        
            {
                console.log("Game Over")
                gameOver()
            } 
            })


    const gameOver = () => {
        clearInterval(gameTimerID)
        clearInterval(barriersLeftTimerId)
        clearInterval(barriersLeftTimerIdTwo)
        setIsGameOver(true)
      }
    
    return (
        <TouchableWithoutFeedback onPress={jump}>
        <View style={styles.container}>      
        <Image style={{zIndex:0}} source={background}/> 

        {IsGameOver && <Text style={styles.titleText}>Game Over</Text>}
        {IsGameOver && <Text style={styles.scoreText}>{score}</Text>}
     
        
            <Player 
                playersBottom={playersBottom}
                playersLeft={playersLeft}
            />
            
            <Barriers
                barriersLeft={barriersLeft}
                barrierWight={barrierWight} 
                barrierHeight={barrierHeight}
                randomButton={obstaclesNegHeight}
                gap={gap}/>

            <Barriers
                barriersLeft={barriersLeftTwo}
                barrierWight={barrierWight} 
                barrierHeight={barrierHeight}
                randomButton={obstaclesNegHeightTwo}
                gap={gap}/>  
        </View>     
        </TouchableWithoutFeedback>         
    )};


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    },
    titleText: {
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center", 
        color: "#ff0000",
        zIndex:2
    
    },
    scoreText: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center", 
        color: "black",
        zIndex:2
        
    },

}) 
