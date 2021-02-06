import React from 'react'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import CallIcon from '@material-ui/icons/Call'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
  
  appHead: {
   height:theme.spacing(7),
   backgroundColor: '#cfe8fc',
   margin:0,
   padding:theme.spacing(2),
   textAlign:'right'
  }

}))

export default function Header (){     
      
  const classes = useStyles()


  return(
    <Container maxWidth className={classes.appHead}>
        <CallIcon/>
     </Container>
  )
}
