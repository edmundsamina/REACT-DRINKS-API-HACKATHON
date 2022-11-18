import React from 'react'

export default function Card(props) {

  return (
    <div className = {props.className}>
    <h3>{props.drinkName}</h3>
    <img src={props.drinkImg} alt={props.drinkName}/>
    <p>{props.strInstructions}</p>
    </div>
  )
}
