import React from 'react'

export default function Card(props) {

  return (
    <div>
    <h2>{props.drinkName}</h2>
    <img src={props.drinkImg} alt={props.drinkName}/>
    </div>
  )
}
