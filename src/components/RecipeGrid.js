import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import RecipeCard from "./RecipeCard";

const RecipeGrid = ({ recipes, add, remove }) => {
  return (
    <Container>
      <Row xs={1} md={4} className="g-4">
        {recipes
          ? recipes.map((recipe) => {
              return (
                <Col key={recipe.id}>
                  <RecipeCard recipe={recipe} add={add} remove={remove} />
                </Col>
              );
            })
          : null}
      </Row>
    </Container>
  );
};

export default RecipeGrid;
