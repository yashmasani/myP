import React from 'react'
import Header from './Header';
import LetterCard from './LetterCard'
import PictureCard from './PictureCard'
import Chapstick from './Chapstick'
import './MainComponent.scss'

export default function MainComponent(){
 
 const str = "This year I had the honour to be a semifinalist at the 2019 Toronto Poetry Slam."
 
 return (
    <div>
      <Header/>
      <div className="pictureContainer">
        <div className="cardContainer">
          <LetterCard text={str} />
          <Chapstick/>
        </div>
        <PictureCard/>
      </div>
  </div>
 )

}

