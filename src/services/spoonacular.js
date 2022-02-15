import axios from "axios";

export const fetchRecipesBySearchQuery = async (query) => {
  try {
    const request = `${process.env.REACT_APP_SPOONACULAR_API_BASE_URL}/recipes/complexSearch?query=${query}&addRecipeInformation=true&&offset=0&number=10&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`;
    const response = await axios.get(request);
    return response.data.results;
  } catch (error) {
    console.log(error);
    return null;
  }
};
