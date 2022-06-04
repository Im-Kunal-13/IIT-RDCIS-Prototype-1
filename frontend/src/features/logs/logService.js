// Importing axios
// This will deal with all of the http stuff. Service is strictly for making the http request and sending the data back.
import axios from "axios";

// Url of the api we are going to hit.
const API_URL = "/api/logs/";

// Get all logs
const getLogs = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete a log
const deleteLog = async (logId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + logId, config);

  return response.data;
};


// Putting all the functions inside authService.
const logService = {
    getLogs
};

// Exporting authService.
export default logService;
