const express = require("express");
const fetchDepots = require("../controllers/depotController");

const router = express.Router();

router.get("/depots", fetchDepots);

module.exports = router;