const axios = require("axios")

const API_URL = '/api/admins/'

// Get all admins
const getAdmins = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.get(API_URL, config)
  
    return response.data
  }

  const adminService = {
    getAdmins
  }
  
  export default adminService
  