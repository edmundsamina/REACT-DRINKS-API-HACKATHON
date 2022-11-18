import Button from "../button"
import { useState } from "react"
import Card from "../card"

export default function Input(props){
const [drinkByName, setDrinkByName] = useState("")
const [drinkCard, setDrinkCard] = useState({})

    function inputValue(e){
        e.preventDefault()
        let name = e.target.value
        setDrinkByName(name)
      }
    
      async function getDrinkByName() {
        const responseJSON = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkByName}`

        );
        const response = await responseJSON.json();
        setDrinkCard(response.drinks[0])
        console.log(response.drinks[0])
      }
    return(
        <label>
        <input className = {props.className}onChange={inputValue}/>
        <Button onClick={()=>{getDrinkByName()}}/>  
        <Card className="newDrink" drinkName = {drinkCard.strDrink} drinkImg = {drinkCard.strDrinkThumb} strInstructions = {drinkCard.strInstructions}/> 
        </label>)
          
}