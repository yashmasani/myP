import React from 'react'
import {hot} from 'react-hot-loader'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Header from './Header';


const useStyles = makeStyles(theme=>({
  
  root: {
    height: '100px'
  }

}))


const App = () =>{
  
  const classes = useStyles()


  return (
    <Header/>
  )
}

export default hot(module)(App)
