import React from 'react'
import './PictureCard.scss'
import './LetterCard.scss'
import image from '../assets/images/rafael-pol-6b5uqlWabB0-unsplash.jpg'


export default function PictureCard(){
  
  return(
    <div className="full-card" id="picCard">
      <div className="full-card-inner" id="innerpicCard">
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
