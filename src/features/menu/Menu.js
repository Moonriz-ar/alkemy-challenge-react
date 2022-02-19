import { useContext } from "react";
import { MenuContext } from "./menuContext";

import RecipeGrid from "../../components/RecipeGrid";

const Menu = () => {
  const menu = useContext(MenuContext);

  // menu information
  const totalPrice = menu.reduce(
    (sum, recipe) => sum + recipe.pricePerServing,
    0
  );

  const calculateAverage = (menu, infoToCalculate) => {
    let total;
    if (infoToCalculate === "time") {
      total = menu.reduce((sum, recipe) => sum + recipe.readyInMinutes, 0);
    } else if (infoToCalculate === "health score") {
      total = menu.reduce((sum, recipe) => sum + recipe.healthScore, 0);
    }
    const average = total / menu.length;
    return average;
  };

  return (
    <>
      <h2>Menu</h2>
      <p>Total price: ${totalPrice}</p>
      <p>Average preparation time: {calculateAverage(menu, "time")} minutes</p>
      <p>Average health score: {calculateAverage(menu, "health score")}</p>
      {menu ? <RecipeGrid recipes={menu} remove="Remove" /> : null}
    </>
  );
};

export default Menu;
