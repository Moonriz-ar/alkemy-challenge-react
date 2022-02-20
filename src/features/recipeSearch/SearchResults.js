import { useContext } from "react";
import { RecipeContext } from "./searchRecipeContext";
import RecipeGrid from "../../components/RecipeGrid";

import Container from "react-bootstrap/Container";

const SearchResults = () => {
  const state = useContext(RecipeContext);

  return (
    <Container className="py-4">
      <h2 className="display-3 pb-2">Recipes search results</h2>
      {state.recipes.length === 0 ? (
        <h3 className="display-4 my-2">Search above for recipes! ☝️</h3>
      ) : null}
      {state.loading === true ? (
        <>
          <h3 className="display-4 my-2">Looking for recipes!</h3>
          <img className="my-1" src="/img/searching.gif" alt="Searching" />
        </>
      ) : (
        <RecipeGrid recipes={state.recipes} add="Add" isSearchResult={true} />
      )}
    </Container>
  );
};

export default SearchResults;
