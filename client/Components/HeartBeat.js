import React, {useState} from 'react'
import './HeartBeat.scss'

export default function HeartBeat(){
  
  const [clickedClass, setClickedClass] = useState("heartbeat")


  const spinEvent  = event => {
    console.log("I clicked on spim ")
    setClickedClass("spinner")
  }

  return(
    <div>
    <div className={`${clickedClass}`} onClick={spinEvent}>{console.log(clickedClass.spin)}</div>
   </div>
  )

}
