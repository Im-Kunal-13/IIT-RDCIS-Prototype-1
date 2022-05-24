// Importing axios
// This will deal with all of the http stuff. Service is strictly for making the http request and sending the data back.
import axios from "axios";

// Url of the api we are going to hit.
const API_URL = "/api/analytics/";

// Get all analytics data
const getData = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Putting all the functions inside analyticService.
const analyticService = {
  getData,
};

// Exporting analyticService.
export default analyticService;
