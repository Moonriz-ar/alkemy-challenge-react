import Card from "react-bootstrap/Card";

const RecipeCard = ({ recipe }) => {
  return (
    <Card>
      <Card.Img variant="top" src={recipe.image} />
      <h2>{recipe.title}</h2>
    </Card>
  );
};

export default RecipeCard;
