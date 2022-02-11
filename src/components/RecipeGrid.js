import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import RecipeCard from "./RecipeCard";

const RecipeGrid = ({ recipes }) => {
  return (
    <Container>
      <Row xs={1} md={4} className="g-4">
        {recipes.map((recipe) => {
          return (
            <Col key={recipe.id}>
              <RecipeCard recipe={recipe} add="Add" />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default RecipeGrid;
