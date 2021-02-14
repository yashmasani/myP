import React, {useState} from 'react'
import {hot} from 'react-hot-loader'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Header from './Components/Header';
import img1 from './assets/images/arlington-research-kN_kViDchA0-unsplash.jpg'
import img2 from './assets/images/sahan-jayasuriya-Nh6P7SnBL38-unsplash.jpg'
import CardMedia from '@material-ui/core/CardMedia'
import './App.scss'
import HeartBeat from './Components/HeartBeat'
import MainComponent from './Components/MainComponent'

const str = "This year I had the honour to be a semifinalist at the 2019 Toronto Poetry Slam."

const useStyles = makeStyles(theme=>({
  
  root: {
    height: '1000px'
  }

}))


const App = () =>{
  
  const [disappear, setDisappear] = useState(false)
  const classes = useStyles()


  const pleaseDisappear  = () => {
    setDisappear(true)
  }

  return (
   <div>
   {!disappear ? <HeartBeat pleaseDisappear={pleaseDisappear}/> : <MainComponent/>}
   </div>
  )
}

export default hot(module)(App)
