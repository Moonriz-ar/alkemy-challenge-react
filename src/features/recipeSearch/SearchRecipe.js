import fetchRecipesbySearchQuery from "../../services/spoonacular";
import { useReducer } from "react";

import SearchBar from "./SearchBar";

const SearchRecipe = () => {
  const [recipesState, dispatchRecipeSearch] = useReducer(
    recipeReducer,
    initialState
  );

  //   ACTIONS
  function toggleVeganFilter() {
    dispatchRecipeSearch({
      type: "RECIPE/TOGGLE_VEGAN_FILTER",
    });
  }

  function fetchRecipesSuccess(recipes) {
    dispatchRecipeSearch({
      type: "RECIPE/FETCH_SUCCESS",
      payload: recipes,
    });
  }

  return (
    <>
      <h1>Search bar</h1>
      <SearchBar />
      <h2>Recipes search results</h2>
    </>
  );
};

const initialState = {
  loading: false,
  searchTerm: "",
  veganFilter: false,
  recipes: [],
};

function recipeReducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default SearchRecipe;
