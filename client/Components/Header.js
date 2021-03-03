import React from 'react'
import './Header.scss'
import {NavLink} from 'react-router-dom'
import circle from '../assets/images/Circle_-_black_simple.svg'


export default function Header (){     
      
 

  return(
  <div>
   <img src={circle} className="logo"/>
   <nav>
     <ul>
       <li><NavLink to="/about" activeClassName="selected">About</NavLink></li>
       <li><NavLink to="/Poems" activeClassName="selected">Poems</NavLink></li>
       <li><NavLink to="/home"  activeClassName="selected">Home</NavLink></li>
       <li><NavLink to="/Articles"  activeClassName="selected">Articles</NavLink></li>
       <li><NavLink to="/Contact" activeClassName="selected">Contact</NavLink></li>
    </ul>
   </nav>
   </div>
  )
}
