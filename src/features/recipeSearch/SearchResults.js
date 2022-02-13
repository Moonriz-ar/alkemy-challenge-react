import { useState, useContext } from "react";
import { RecipeContext } from "./searchRecipeContext";

import RecipeGrid from "../../components/RecipeGrid";

const SearchResults = () => {
  const recipes = useContext(RecipeContext);

  return (
    <>
      <h2>Recipes search results</h2>
      {recipes.loading === true ? (
        <>
          <h3>Looking for recipes!</h3>
          <img src="/img/searching.gif" alt="Searching" />
        </>
      ) : (
        <RecipeGrid recipes={recipes.recipes} />
      )}
    </>
  );
};

export default SearchResults;
