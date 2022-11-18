import "./App.css";
import Button from "./components/button";
import Card from "./components/card";
import Input from "./components/input";
import { useState } from "react";


function App() {
  const [drinkName, setDrinkName] = useState();
  const [drinkImg, setDrinkImg] = useState();
  const [instructions, setInstructions] = useState();
  

  async function getDrink() {
    const responseJSON = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const response = await responseJSON.json();
    console.log(response);
    setDrinkName(response.drinks[0].strDrink);
    setDrinkImg(response.drinks[0].strDrinkThumb);
    setInstructions(response.drinks[0].strInstructions);
    console.log(drinkName);
  }

  

  return (
    <div className="App">
      <h1>🤖AI BARETENDER🤖</h1>
      <h2 className="sub-heading">
        let our robot bartender pick a drink for you!
      </h2>
      <Button
          text="Random Cocktail!"
          onClick={() => {
            getDrink();
          }}
        />
      <div className="cardContainer">
        <Card
          className="randomDrink"
          drinkName={drinkName}
          drinkImg={drinkImg}
          strInstructions={instructions}
        />
        <Input/>
         

      </div>
    </div>
  );
}

export default App;
