import React from 'react'
import {hot} from 'react-hot-loader'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Header from './Components/Header';
import img1 from './assets/images/arlington-research-kN_kViDchA0-unsplash.jpg'
import img2 from './assets/images/sahan-jayasuriya-Nh6P7SnBL38-unsplash.jpg'
import CardMedia from '@material-ui/core/CardMedia'
import './App.scss'
import LetterCard from './Components/LetterCard'
import HeartBeat from './Components/HeartBeat'

const str = "This year I had the honour to be a semifinalist at the 2019 Toronto Poetry Slam."

const useStyles = makeStyles(theme=>({
  
  root: {
    height: '1000px'
  }

}))


const App = () =>{
  
  const classes = useStyles()


  return (
   <div>
    <Header/>
    <LetterCard text={str} />
    <HeartBeat/>
   </div>
  )
}

export default hot(module)(App)
