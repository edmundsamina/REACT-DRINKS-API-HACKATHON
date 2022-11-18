import React from 'react'
// import { useEffect, useState } from 'react';

export default function Card(props) {
//   // // const [drinkName, setDrinkName] = useState("")

//   // useEffect(()=>{
//   // async function getDrink(){
//   //   const responseJSON = await fetch('www.thecocktaildb.com/api/json/v1/1/random.php')
//   //   const response = await responseJSON.json();
//   //   console.log(response)
//   //   // setDrinkName(response.drink[0].strDrink)
//   //   // console.log(drinkName)
//   // }
//   // getDrink();
// })
  return (
    <div>
    <h2>{}</h2>
    <img src={props.image} alt={props.alt}/>
    </div>
  )
}
