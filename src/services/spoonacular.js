import axios from "axios";

export const fetchRecipesBySearchQuery = async (query) => {
  try {
    const request = `${process.env.REACT_APP_SPOONACULAR_API_BASE_URL}/recipes/complexSearch?query=${query}&offset=0&number=10&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`;
    const response = await axios.get(request);
    return response.data.results;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchRecipesDetails = async (recipesArray) => {
  const recipeIdArray = recipesArray.map((recipe) => recipe.id);
  try {
    const request = `${
      process.env.REACT_APP_SPOONACULAR_API_BASE_URL
    }/recipes/informationBulk?ids=${recipeIdArray.join()}&apiKey=${
      process.env.REACT_APP_SPOONACULAR_API_KEY
    }`;
    const response = await axios.get(request);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
