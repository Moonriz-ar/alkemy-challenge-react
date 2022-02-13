import { createContext, useReducer } from "react";

export const RecipeContext = createContext(null);
export const RecipeDispatchContext = createContext(null);

export function RecipesProvider({ children }) {
  const [recipeState, dispatch] = useReducer(searchRecipeReducer, initialState);

  return (
    <RecipeContext.Provider value={recipeState}>
      <RecipeDispatchContext.Provider value={dispatch}>
        {children}
      </RecipeDispatchContext.Provider>
    </RecipeContext.Provider>
  );
}

function searchRecipeReducer(state, action) {
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

const initialState = {
  loading: false,
  error: "",
  recipes: [],
};
