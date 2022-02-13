import { useContext } from "react";
import { MenuDispatchContext } from "../features/menu/menuContext";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const RecipeCard = ({ recipe, add, remove }) => {
  const dispatch = useContext(MenuDispatchContext);

  // ACTIONS
  function addRecipeMenu(recipe) {
    dispatch({
      type: "MENU/ADD",
      payload: recipe,
    });
  }

  function removeRecipeMenu(recipe) {
    dispatch({
      type: "MENU/REMOVE",
      payload: recipe,
    });
  }

  return (
    <Card>
      <Card.Img variant="top" src={recipe.image} />
      <h2>{recipe.title}</h2>
      <p>Price: ${recipe.pricePerServing}</p>
      <p>Preparation time: {recipe.readyInMinutes}</p>
      <p>Health Score: {recipe.readyInMinutes}</p>
      {add && <Button onClick={() => addRecipeMenu(recipe)}>{add}</Button>}
      {remove && (
        <Button onClick={() => removeRecipeMenu(recipe)}>{remove}</Button>
      )}
    </Card>
  );
};

export default RecipeCard;
