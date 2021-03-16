import React,{useState} from 'react'
import "./blog.scss"
import image from "../assets/images/arlington-research-kN_kViDchA0-unsplash.jpg"
//parse data from a file to place in blog
//static files makes easier for lamia to publish more

export default function blog(){
  
 // const [position,setPosition]= useState(false)
  
 //heading
 //date
 //explanation
 

 //functions  -> view all blogs -- blogs in a card form rendered loop
 // --> comments?
 // ---> likes ? 
 // database??

  return(
    <div className="blog">
      <p className="blogText">
      <img src={image} className={Math.round(Math.random())==0 ? "blogImageL": "blogImageR"}/>
      How many of you want to vent someone but don’t feel safe enough to open up with close ones?

    In my last blog post I wrote about how writing has helped me through the difficult times and the good moments as well. But now I want to take this a step further and talk about how you can really take your mental health in your own hands and really change it for the better.

    First I need to clear up some myths that still get thrown around. If you’re seeking help for your Mental Health that doesn’t automatically mean that you will get prescribed a pill. Mental health is treated very seriously overall and in Ontario so depending on the severity of your symptoms you will be provided with a variety of options that are best suited for your needs. However, I will explain and break the options down further as we go along.

    I’ve heard so many celebrities say they are so perplexed by the fact that you would actually just go to a stranger and talk about your problems. The countless amount times that I’ve heard “Why would I tell my problems to a stranger?”. I’ve even heard friends and family talk about how taboo it is that you would go to a therapist to talk about your problems because he or she is a stranger. For me that never made sense at all in my head because I’m thinking why wouldn’t you go tell your problems to a therapist. A therapist is a registered health professional whose expertise is in clinical therapy. Yes you can go to your friends and family but at the end of the day they aren’t a therapist.</p>
    </div>
  )

}
