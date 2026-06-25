const axios = require("axios");

const LOG_API_URL =
  "http://4.224.186.213/evaluation-service/logs";

async function log(stack, level, pkg, message) {
  try {
    const token = process.env.ACCESS_TOKEN;

    if (!token) {
      console.error("❌ ACCESS_TOKEN is missing in .env");
      return null;
    }

    const response = await axios.post(
      LOG_API_URL,
      {
        stack,
        level,
        package: pkg,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN.trim()}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("✅ Log Created:", response.data);
    return response.data;

  } catch (error) {
    console.error("❌ Log Creation Failed");
    console.error(error.response?.data || error.message);

    return null;
  }
}

module.exports = log;