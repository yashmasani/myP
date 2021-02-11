import React, {useEffect} from 'react';
//import soundfile from "../assets/images/sun.mp3"

export default function Music(){
 
 useEffect(()=>{

  let sound = new Audio("../assets/images/sun.mp3") 
  sound.play()

 }) 

  return(
    <div></div>
  )


}
