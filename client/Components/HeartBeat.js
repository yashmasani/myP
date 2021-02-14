import React, {useState} from 'react'
import './HeartBeat.scss'

export default function HeartBeat(props){
  
  const [clickedClass, setClickedClass] = useState("central heartbeat")
   

  const spinEvent  = event => {
    setClickedClass("central spinner")
    window.setTimeout(props.pleaseDisappear,2000)
  }

  return(
   <div>
    <h1 className="central" style={{top:"25%", left:"43%"}}>Unfold My Story</h1>
    <div className={`${clickedClass}`} onClick={spinEvent}></div>
   </div>
  )

}
