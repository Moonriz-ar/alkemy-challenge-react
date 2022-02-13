import { RecipesProvider } from "./features/recipeSearch/searchRecipeContext";
import { MenuProvider } from "./features/menu/menuContext";

import Menu from "./features/menu/Menu";
import SearchBar from "./features/recipeSearch/SearchBar";
import SearchResults from "./features/recipeSearch/SearchResults";

const Home = () => {
  return (
    <MenuProvider>
      <RecipesProvider>
        <SearchBar />
        <SearchResults />
        <Menu />
      </RecipesProvider>
    </MenuProvider>
  );
};

export default Home;
