import fetchRecipesbySearchQuery from "../../services/spoonacular";
import { useReducer } from "react";

import SearchBar from "./SearchBar";

const SearchRecipe = () => {
  const [recipesState, dispatchRecipeSearch] = useReducer(
    recipeReducer,
    initialState
  );

  //   ACTIONS
  function setSearchTerm(term) {
    dispatchRecipeSearch({
      type: "RECIPE/SET_SEARCH_TERM",
      payload: term,
    });
  }

  function toggleVeganFilter() {
    dispatchRecipeSearch({
      type: "RECIPE/TOGGLE_VEGAN_FILTER",
    });
  }

  //   function queryRecipes() {
  //     dispatchRecipeSearch({
  //         type: "RECIPE/FETCH_SUCCESS",
  //         payload:
  //     });
  //   }

  return (
    <>
      <h1>Search bar</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
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
    case "RECIPE/SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
}

export default SearchRecipe;
