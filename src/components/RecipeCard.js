import Swal from "sweetalert2";

import { useContext } from "react";
import { MenuDispatchContext } from "../features/menu/menuContext";
import { MenuContext } from "../features/menu/menuContext";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const RecipeCard = ({ recipe, add, remove }) => {
  const menu = useContext(MenuContext);
  const dispatch = useContext(MenuDispatchContext);

  const veganCount = menu.reduce((sum, recipe) => {
    if (recipe.vegan) {
      return sum + 1;
    } else {
      return sum;
    }
  }, 0);

  console.log("Vegan count", veganCount);

  // ACTIONS
  function addRecipeMenu(recipe) {
    if (menu.length > 4) {
      Swal.fire({
        title: "Hold up!",
        text: "The menu should have a maximum of 4 recipes",
        icon: "error",
        confirmButtonText: "Go back",
      });
    } else if (menu.length >= 2) {
      if (recipe.vegan && veganCount >= 2) {
        Swal.fire({
          title: "Hold up!",
          text: "The menu should have a maximum of 2 vegan recipes",
          icon: "error",
          confirmButtonText: "Go back",
        });
      } else if (recipe.vegan === false && veganCount <= 2) {
        Swal.fire({
          title: "Hold up!",
          text: "The menu should have at least 2 vegan recipes",
          icon: "error",
          confirmButtonText: "Go back",
        });
      } else {
        dispatch({
          type: "MENU/ADD",
          payload: recipe,
        });
      }
    } else {
      dispatch({
        type: "MENU/ADD",
        payload: recipe,
      });
    }
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
