import { useContext } from "react";
import { RecipeDispatchContext } from "./searchRecipeContext";

import { useFormik } from "formik";
import { fetchRecipesBySearchQuery } from "../../services/spoonacular";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const SearchBar = () => {
  const dispatch = useContext(RecipeDispatchContext);

  // ACTIONS
  function fetchRecipesPending() {
    dispatch({
      type: "RECIPE/FETCH_PENDING",
    });
  }

  function fetchRecipesSuccess(recipes) {
    dispatch({
      type: "RECIPE/FETCH_SUCCESS",
      payload: recipes,
    });
  }

  function fetchRecipesFailure(error) {
    dispatch({
      type: "RECIPE/FETCH_FAILURE",
      payload: error,
    });
  }

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: async (values) => {
      fetchRecipesPending();
      try {
        const recipes = await fetchRecipesBySearchQuery(values.search);
        fetchRecipesSuccess(recipes);
      } catch (err) {
        fetchRecipesFailure(err);
      }
    },
    validate: (values) => {
      const errors = {};
      if (values.search.length <= 2) {
        errors.search = "Enter more than 2 characters to search recipe";
      }
      return errors;
    },
    validateOnChange: false,
  });

  return (
    <Form
      className="d-flex justify-content-center align-items-start p-2"
      onSubmit={formik.handleSubmit}
    >
      <div className="me-3">
        <FormControl
          type="search"
          placeholder="Search recipe"
          name="search"
          className="me-2"
          aria-label="Search"
          value={formik.values.search}
          onChange={formik.handleChange}
        />
        {formik.errors.search && (
          <div className="text-danger ms-1 mt-1">{formik.errors.search}</div>
        )}
      </div>

      <Button variant="outline-light" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
