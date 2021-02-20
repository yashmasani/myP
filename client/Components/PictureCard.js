import React from 'react'
import './PictureCard.scss'
import image from '../assets/images/rafael-pol-6b5uqlWabB0-unsplash.jpg'


export default function PictureCard(){
  
  return(
    <div className="full-card" style={{height:"400px",width:"50%"}}>
      <div className="full-card-inner" style={{width:"50%"}}>
        <div className="card">
          <img src={image} className="picture"/>
        </div>
        <div className="card-back">
           See My Story
        </div>
      </div>
    </div>
  )

 }
