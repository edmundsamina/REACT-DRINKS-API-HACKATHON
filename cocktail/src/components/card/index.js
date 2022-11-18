import React from 'react'

export default function card(props) {
  return (
    <div>
    <h2>{props.name}</h2>
    <img src={props.image} alt={props.alt}/>
    </div>
  )
}
