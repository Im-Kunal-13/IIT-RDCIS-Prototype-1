const axios = require("axios");

const API_URL = "/api/visiters/";

// Create new visiter
const setVisiter = async (visiterData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, visiterData, config);

  return response.data;
};

// Get visiters
const getVisiters = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const visiterService = {
  setVisiter,
  getVisiters,
};

export default visiterService;
