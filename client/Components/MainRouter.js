import React from 'react'
import {Route, Switch} from 'react-router-dom'
import MainComponent from './MainComponent'
import Header from './Header'
import About from './About'


export default function MainRouter(){

  return( 
   <div>
   <Header/>
   <Switch>
    <Route path="/about">
      <About/>
    </Route>
    <Route path="/">
      <MainComponent/>
    </Route>
   </Switch>
  </div>
  )

}


