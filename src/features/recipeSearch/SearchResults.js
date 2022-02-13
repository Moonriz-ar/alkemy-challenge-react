import { useContext } from "react";
import { RecipeContext } from "./searchRecipeContext";

import RecipeGrid from "../../components/RecipeGrid";

const SearchResults = () => {
  const state = useContext(RecipeContext);

  return (
    <>
      <h2>Recipes search results</h2>
      {state.loading === true ? (
        <>
          <h3>Looking for recipes!</h3>
          <img src="/img/searching.gif" alt="Searching" />
        </>
      ) : (
        <RecipeGrid recipes={state.recipes} add="Add" />
      )}
    </>
  );
};

export default SearchResults;
