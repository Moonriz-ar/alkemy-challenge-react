import { useContext } from "react";
import { RecipeContext, RecipeDispatchContext } from "../RecipeContext";

import RecipeGrid from "../../components/RecipeGrid";

const Menu = () => {
  const state = useContext(RecipeContext);

  return (
    <>
      <h2>Menu</h2>
    </>
  );
};

export default Menu;
