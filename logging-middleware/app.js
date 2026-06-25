const express = require("express");
require("dotenv").config();

const log = require("./logger"); // 👈 import logger

const app = express();

app.use(express.json());

// middleware
app.use(async (req, res, next) => {
  const start = Date.now();

  res.on("finish", async () => {
    await log(
      "backend",
      "info",
      "middleware",
      `${req.method} ${req.url}`
    );
  });

  next();
});

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});