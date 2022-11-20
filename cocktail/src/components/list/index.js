import ListItem from "../listItem"


export default function List({drinkByIngredient}){
    return (
        <ul>
        {
            drinkByIngredient.filter((drinks, index) => index < 20).map((drinks)=>{
                return <ListItem text = {drinks.strDrink}/>
            })
        }           
        </ul>
    )
}


////.filter((item, index) => index < 5)
//drinksByIngredient.filter((drinks, index) => index < 20).map