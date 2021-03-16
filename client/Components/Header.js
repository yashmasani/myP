import React,{useState} from 'react'
import './Header.scss'
import {NavLink} from 'react-router-dom'
import circle from '../assets/images/Circle_-_black_simple.svg'


export default function Header (){     
      
  const [isClicked,setIsClick] = useState(false)
  const [cssClass, setCssClass] = useState("not-overlay")


 const clicked = event => {
    console.log("I was clicked")
    //setIsClick(!isClicked)
    setCssClass("overlay")
 } 

 const close =event => {
    setCssClass("not-overlay")
 }

  return(
  <div class="top">
   <img src={circle} className="logo" onClick={clicked}/>
   <span>Lamia's Blog</span>
   <nav className={`${cssClass}`} >
     <span onClick={close}>X</span>
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
