const axios = require("axios");

async function getDepots() {
  try {
    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/depots",
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN.trim()}`
        }
      }
    );

    return response.data;
  } catch (error) {
    console.log("❌ Error fetching depots");
    console.log(error.response?.data || error.message);
  }
}

module.exports = getDepots;