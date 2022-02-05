import axios from "axios";

const login = async (credentials) => {
  const response = await axios.post(
    process.env.REACT_APP_ALKEMY_API_URL,
    credentials
  );
  return response.data;
};

export default { login };
