import { useContext } from "react";
import { MenuContext } from "./menuContext";

import RecipeGrid from "../../components/RecipeGrid";

import Container from "react-bootstrap/Container";

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
      {menu.length !== 0 ? (
        <Container className="mb-4">
          <p className="my-1">
            <span className="fw-bold">Total price:</span> ${totalPrice}
          </p>
          <p className="my-1">
            <span className="fw-bold">Average preparation time:</span>{" "}
            {calculateAverage(menu, "time")} minutes
          </p>
          <p className="my-1">
            <span className="fw-bold">Average health score:</span>{" "}
            {calculateAverage(menu, "health score")}
          </p>
        </Container>
      ) : (
        <p>Go back and add some recipes to the menu!</p>
      )}

      {menu ? (
        <RecipeGrid recipes={menu} remove="Remove" isSearchResult={false} />
      ) : null}
    </>
  );
};

export default Menu;
