import Swal from "sweetalert2";

import { useContext } from "react";
import {
  MenuDispatchContext,
  MenuContext,
  addRecipeMenu,
  removeRecipeMenu,
} from "../features/menu/menuContext";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const RecipeCard = ({ recipe, add, remove }) => {
  const menu = useContext(MenuContext);
  const dispatch = useContext(MenuDispatchContext);

  // Counter for vegan and non vegan recipes
  const veganCount = menu.reduce((sum, recipe) => {
    if (recipe.vegan) {
      return sum + 1;
    } else {
      return sum;
    }
  }, 0);

  const nonVeganCount = menu.reduce((sum, recipe) => {
    if (!recipe.vegan) {
      return sum + 1;
    } else {
      return sum;
    }
  }, 0);

  return (
    <Card>
      <Card.Img variant="top" src={recipe.image} />
      <h2>{recipe.title}</h2>
      <p>Price: ${recipe.pricePerServing}</p>
      <p>Preparation time: {recipe.readyInMinutes}</p>
      <p>Health Score: {recipe.healthScore}</p>
      {add && (
        <Button
          onClick={() =>
            addRecipeMenu(
              recipe,
              menu,
              dispatch,
              Swal,
              veganCount,
              nonVeganCount
            )
          }
        >
          {add}
        </Button>
      )}
      {remove && (
        <Button onClick={() => removeRecipeMenu(recipe, dispatch)}>
          {remove}
        </Button>
      )}
    </Card>
  );
};

export default RecipeCard;
