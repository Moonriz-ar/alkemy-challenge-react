import { useContext } from "react";
import { RecipeContext } from "./searchRecipeContext";
import RecipeGrid from "../../components/RecipeGrid";

import Container from "react-bootstrap/Container";

const SearchResults = () => {
  const state = useContext(RecipeContext);

  return (
    <Container>
      <h2 className="display-3 my-4">Recipes search results</h2>
      {state.loading === true ? (
        <>
          <h3 className="display-4 my-2">Looking for recipes!</h3>
          <img className="my-1" src="/img/searching.gif" alt="Searching" />
        </>
      ) : (
        <RecipeGrid recipes={state.recipes} add="Add" />
      )}
    </Container>
  );
};

export default SearchResults;
