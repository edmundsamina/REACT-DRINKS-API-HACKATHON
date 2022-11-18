import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import Card from './components/card';
import { useEffect, useState } from 'react';

function App() {
const [drink, setDrink] = useState()

  useEffect(()=>{
  async function getDrink(){
    const responseJSON = await fetch("www.thecocktaildb.com/api/json/v1/1/random.php")
    const response = await responseJSON.json();
    setDrink(response.drink[0])
  }
  getDrink();
})


  return (
    <div className="App">
    <h1>The cocktail App</h1>
    <p>Read about the best cocktails in the world:</p>
      <Button text="New Cocktail!"/>
      <Card name={drink.strDrink}/>
    </div>
  );
}

export default App;
