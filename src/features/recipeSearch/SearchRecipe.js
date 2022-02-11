import { useReducer } from "react";

import SearchBar from "./SearchBar";

const SearchRecipe = () => {
  const [recipesState, dispatchRecipeSearch] = useReducer(
    recipeReducer,
    initialState
  );

  //   ACTIONS
  function fetchRecipesPending() {
    dispatchRecipeSearch({
      type: "RECIPE/FETCH_PENDING",
    });
  }

  function fetchRecipesSuccess(recipes) {
    dispatchRecipeSearch({
      type: "RECIPE/FETCH_SUCCESS",
      payload: recipes,
    });
  }

  function fetchRecipesFailure(error) {
    dispatchRecipeSearch({
      type: "RECIPE/FETCH_FAILURE",
      payload: error,
    });
  }

  return (
    <>
      <h1>Search bar</h1>
      <SearchBar
        fetchRecipesPending={fetchRecipesPending}
        fetchRecipesSuccess={fetchRecipesSuccess}
        fetchRecipesFailure={fetchRecipesFailure}
      />
      <h2>Recipes search results</h2>
    </>
  );
};

const initialState = {
  loading: false,
  error: "",
  recipes: [],
};

function recipeReducer(state, action) {
  switch (action.type) {
    case "RECIPE/FETCH_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "RECIPE/FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        recipes: action.payload,
      };
    case "RECIPE/FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: "there was an error",
        recipes: null,
      };
    default:
      return state;
  }
}

export default SearchRecipe;
