import { RecipesProvider } from "./features/recipeSearch/searchRecipeContext";
import { MenuProvider } from "./features/menu/menuContext";
import Menu from "./features/menu/Menu";
import SearchBar from "./features/recipeSearch/SearchBar";
import SearchResults from "./features/recipeSearch/SearchResults";
import MenuButton from "./features/menu/MenuButton";

import Navbar from "react-bootstrap/Navbar";

const Home = () => {
  return (
    <>
      <MenuProvider>
        <RecipesProvider>
          <Navbar
            bg="dark"
            variant="dark"
            sticky="top"
            className="d-flex flex-column"
          >
            <Navbar.Brand>FOUR SEASONS MENU</Navbar.Brand>
          </Navbar>
          <Navbar
            bg="dark"
            variant="dark"
            sticky="top"
            className="d-flex flex-column"
          >
            <SearchBar />
          </Navbar>

          <div className="content-wrapper">
            <SearchResults />
            <MenuButton className="menu-button" />
            <Menu />
          </div>
        </RecipesProvider>
      </MenuProvider>
    </>
  );
};

export default Home;
