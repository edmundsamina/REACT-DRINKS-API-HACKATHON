import './App.css';
import Button from './components/button';
import Card from './components/card';


async function getDrink(){
  const responseJSON = await fetch("https://www.boredapi.com/api/activity")
  const response = await responseJSON.json();
  console.log(response)
  console.log("clicked")
}


function App() {

  function handleClick(){
    getDrink()
  }

  return (
    <div className="App">
    <h1>The cocktail App</h1>
    <p>Read about the best cocktails in the world:</p>
      <Button onClick= {handleClick} text="New Cocktail!"/>
      <Card />
    </div>
  );
}

export default App;
