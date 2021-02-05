import React from 'react'
import './LetterCard.scss'

export default function LetterCard(props){
  
  const [par, setPar] = React.useState(props.text)
  
  const catchyWords = ["but","mad","ugh","and", "then"] 
  

  const headedWord = (text) => {
    const def = 4
    
    const textArray = text.split(" ")
    for (let i=0; i<=5;i++) {
      if (catchyWords.includes(textArray[i])){
        if (i > 3){
          return i;
        }else{
          continue;
        }
      }
    } 
    return def
  }

  const indexing = (num) =>{
   let index=0;
   for (let i=0; i<par.length;i++){
      if (par[i] == " "){
        index += 1;
      }
      if (index == num){
        console.log(i)
        return i;
      }
    }
  }

  return(
    <div id="card">
       <h1 className="quote">{par.slice(0,indexing(headedWord(par)))}...</h1>
       <p>...{par.slice(indexing(headedWord(par)))}</p>
    </div>

  )

}
