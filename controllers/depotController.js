const getDepots = require("../services/depotService");

async function fetchDepots(req, res) {
  try {
    const data = await getDepots();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch depots" });
  }
}

module.exports = fetchDepots;