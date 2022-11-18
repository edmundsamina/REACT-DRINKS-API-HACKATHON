import React from 'react'
import './styles.css';
export default function Card(props) {

  return (
    <div className = {props.className}>
    <h3 className='header'>{props.drinkName}</h3>
    <img className='img' src={props.drinkImg} alt={props.drinkName}/>
    <p>{props.strInstructions}</p>
    </div>
  )
}
