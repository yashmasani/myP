import React from 'react'
import {hot} from 'react-hot-loader'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  appHead: {
    height:50,
    color: theme.palette.primary,
    position: 'fixed',
    margin:"10px"
  }
}))

const App = () =>{
  const classes = useStyles()
  const [check, setChecked] = React.useState(false) 
  

  const showIt = () => {
      setChecked(!check)
  }

  return (
   <Paper height='1000px'>
    <AppBar className={classes.appHead}>
      <Grid container>
        <Grid item xs={3}>
          <Toolbar>
            <Button onClick={showIt}>
              Menu         
            </Button>
          </Toolbar>
        </Grid>
      </Grid>
    </AppBar>
    <Toolbar/>
    <Grid container>
      <Grid item xs={3}>
        <Grow in={check}>
        <List component="nav">
          <ListItem>
              <ListItemText primary="New Item"></ListItemText>
          </ListItem>
          <ListItem>
              <ListItemText primary="New Item2"></ListItemText>
          </ListItem>
        </List>
        </Grow>
      </Grid>
   </Grid>
   </Paper>
  )
}

export default hot(module)(App)
