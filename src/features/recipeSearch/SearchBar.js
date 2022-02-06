import { useFormik } from "formik";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const SearchBar = () => {
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      console.log("form data", values);
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
    <Container>
      <Form
        className="d-flex justify-content-center align-items-start"
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

        <Button variant="outline-primary" type="submit">
          Search
        </Button>
      </Form>
    </Container>
  );
};

export default SearchBar;