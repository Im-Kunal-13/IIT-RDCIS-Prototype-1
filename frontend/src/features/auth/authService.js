// Importing axios
// This will deal with all of the http stuff. Service is strictly for making the http request and sending the data back.
import axios from "axios";

// Url of the api we are going to hit.
const API_URL = "/api/admins/";

// Register Admin
const register = async (adminData) => {
  // Here we will wait for the response from the API_URL.
  const response = await axios.post(API_URL, adminData);

  // Here we will save it in our local storage and use JSON.Stringify to save it.
  if (response.data) {
    localStorage.setItem("admin", JSON.stringify(response.data));
  }

  return response.data;
};

// Login Admin
const login = async (adminData) => {
  // Here we will wait for the response from the API_URL.
  const response = await axios.post(API_URL + "login", adminData);

  // Here we will save it in our local storage and use JSON.Stringify to save it.
  if (response.data) {
    localStorage.setItem("admin", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout Admin
// This will simply remove the admin data from the local storage.
const logout = () => {
  localStorage.removeItem("admin");
};

// Get all admins
const getUsers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Putting all the functions inside authService.
const authService = {
  register,
  logout,
  login,
  getUsers,
};

// Exporting authService.
export default authService;
