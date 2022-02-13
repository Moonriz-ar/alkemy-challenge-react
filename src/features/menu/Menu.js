import { useContext } from "react";
import { MenuContext } from "./menuContext";

import RecipeGrid from "../../components/RecipeGrid";

const Menu = () => {
  const menu = useContext(MenuContext);

  return (
    <>
      <h2>Menu</h2>
      {menu ? <RecipeGrid recipes={menu} remove="Remove" /> : null}
    </>
  );
};

export default Menu;
