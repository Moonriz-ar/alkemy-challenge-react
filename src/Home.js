import SearchBar from "./features/recipeSearch/SearchBar";
import SearchResults from "./features/recipeSearch/SearchResults";
import { RecipesProvider } from "./features/recipeSearch/searchRecipeContext";

const Home = () => {
  return (
    <RecipesProvider>
      <SearchBar />
      <SearchResults />
    </RecipesProvider>
  );
};

export default Home;
