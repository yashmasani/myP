import React from 'react'
import './Header.scss'
import {NavLink} from 'react-router-dom'


export default function Header (){     
      
 

  return(
   <nav>
     <ul>
       <li><NavLink to="/about" activeClassName="selected">About</NavLink></li>
       <li><NavLink to="/" activeClassName="selected">Poems</NavLink></li>
       <li><NavLink to="/"  activeClassName="selected">Home</NavLink></li>
       <li><NavLink to="/"  activeClassName="selected">Articles</NavLink></li>
       <li><NavLink to="/" activeClassName="selected">Contact</NavLink></li>
    </ul>
   </nav>
  )
}
