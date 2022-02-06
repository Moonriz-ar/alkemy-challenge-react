import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const SearchBar = ({ setSearchTerm }) => {
  return (
    <Container>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search recipe"
          className="me-2"
          aria-label="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="outline-primary">Search</Button>
      </Form>
    </Container>
  );
};

export default SearchBar;
