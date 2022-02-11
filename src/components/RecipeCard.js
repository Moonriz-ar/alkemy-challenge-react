import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const RecipeCard = ({ recipe, add, remove }) => {
  return (
    <Card>
      <Card.Img variant="top" src={recipe.image} />
      <h2>{recipe.title}</h2>
      <p>Price: ${recipe.pricePerServing}</p>
      <p>Preparation time: {recipe.readyInMinutes}</p>
      <p>Health Score: {recipe.readyInMinutes}</p>
      {add && <Button>{add}</Button>}
      {remove && <Button>{remove}</Button>}
    </Card>
  );
};

export default RecipeCard;
