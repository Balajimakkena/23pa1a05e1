const axios = require("axios");

const BASE_URL = "http://4.224.186.213/evaluation-service";

async function getVehicles(token) {
  try {
    const response = await axios.get(`${BASE_URL}/vehicles`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.error("❌ Error fetching vehicles");
    console.error(error.response?.data || error.message);
    return null;
  }
}

module.exports = { getVehicles };