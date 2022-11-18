import './App.css';
import Button from './components/button';
import Card from './components/card';
import { useEffect, useState } from 'react';

function App() {

/*   useEffect(()=>{
getDrink()
  },[]
  ) */
  
const [drinkName, setDrinkName] = useState("Potato")
const [drinkImg, setDrinkImg] = useState("")


async function getDrink(){
const responseJSON = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
const response = await responseJSON.json();
console.log(response)
setDrinkName(response.drinks[0].strDrink)
setDrinkImg(response.drinks[0].strDrinkThumb)
console.log(drinkName)
}


  return (
    <div className="App">
    <h1>The cocktail App</h1>
    <p>Read about the best cocktails in the world:</p>
      <Button text="New Cocktail!" onClick={()=>{getDrink()}}/>
      <Card drinkName={drinkName} drinkImg={drinkImg}/>
    </div>
  );
}

export default App;
