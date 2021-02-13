import React, {useState} from 'react'
import './HeartBeat.scss'

export default function HeartBeat(props){
  
  const [clickedClass, setClickedClass] = useState("heartbeat")
   

  const spinEvent  = event => {
    setClickedClass("spinner")
    window.setTimeout(props.pleaseDisappear,2000)
  }

  return(
    <div>
    <div className={`${clickedClass}`} onClick={spinEvent}></div>
   </div>
  )

}
