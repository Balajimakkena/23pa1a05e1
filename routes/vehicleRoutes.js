const express = require("express");
const router = express.Router();

const { getVehicles } = require("../services/vehicleService");

router.get("/vehicles", async (req, res) => {
  const token = process.env.ACCESS_TOKEN;

  const data = await getVehicles(token);

  if (!data) {
    return res.status(500).json({ message: "Failed to fetch vehicles" });
  }

  res.json(data);
});

module.exports = router;