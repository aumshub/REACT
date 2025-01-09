import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    <div className='card' style={{overflow: "hidden"}}>
         <img src="https://images.unsplash.com/photo-1503455637927-730bce8583c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D" alt="" width={300} style={{border: "2px solid black"}}  />
         <h1>{props.title}</h1>
         <p>{props.description}</p>
    </div>
  )
}

export default Card
