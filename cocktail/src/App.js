import "./App.css";
import Button from "./components/button";
import Card from "./components/card";
import Input from "./components/input";
import { useState } from "react";
import List from "./components/list";

function App() {
  const [drinkName, setDrinkName] = useState();
  const [drinkImg, setDrinkImg] = useState();
  const [instructions, setInstructions] = useState();
  const [drinkByName, setDrinkByName] = useState("");
  const [drinkCard, setDrinkCard] = useState({});
  const [drinkIngredient, setIngredient] = useState();
  const [drinkByIngredient, setDrinkByIngredient] = useState([]);

  function inputValue(e) {
    e.preventDefault();
    let name = e.target.value;
    setDrinkByName(name);
  }

  function inputValue2(e) {
    e.preventDefault();
    let ingredient = e.target.value;
    setIngredient(ingredient);
  }
  async function getDrinkByIngredient() {
    const responseJSON = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drinkIngredient}`
    );
    const response = await responseJSON.json();
    setDrinkByIngredient(response.drinks);
    console.log(response.drinks);
  }

  async function getDrinkByName() {
    const responseJSON = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkByName}`
    );
    const response = await responseJSON.json();
    setDrinkCard(response.drinks[0]);
    console.log(response.drinks[0]);
  }

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
      <h1>🤖AI BARTENDER🤖</h1>
      <h2 className="sub-heading">
        let our robot bartender pick a drink for you!
      </h2>
      <div className="buttonContainer">
        <Button
          text="Random Cocktail!"
          onClick={() => {
            getDrink();
          }}
        />
        <div className="inputButton">
          <Input onChange={inputValue} />
          <Button
            text="Cocktail By Name"
            className="byNameButton"
            onClick={() => {
              getDrinkByName();
            }}
          />
        </div>
        <div className="inputButton">
          <Input onChange={inputValue2} />
          <Button
            text="Cocktail By Ingredient"
            className="byIngredientButton"
            onClick={() => {
              getDrinkByIngredient();
            }}
          />
        </div>
      </div>
      <div className="cardContainer">
        <Card
          className="newDrink"
          drinkName={drinkName}
          drinkImg={drinkImg}
          strInstructions={instructions}
        />

        <Card
          className="newDrink"
          drinkName={drinkCard.strDrink}
          drinkImg={drinkCard.strDrinkThumb}
          strInstructions={drinkCard.strInstructions}
        />
        <Card className="newDrink">
          <List drinkByIngredient={drinkByIngredient} />
        </Card>
      </div>
    </div>
  );
}

export default App;
