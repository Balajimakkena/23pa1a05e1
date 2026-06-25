const express = require("express");
require("dotenv").config();
console.log("TOKEN LENGTH:", process.env.ACCESS_TOKEN?.length);
const log = require("./logger");

const app = express();

app.use(express.json());

/* 🔥 Middleware (logging) */
app.use(async (req, res, next) => {
  const start = Date.now();

  res.on("finish", async () => {
    try {
      await log(
        "backend",
        "info",
        "middleware",
        `${req.method} ${req.originalUrl}`
      );
    } catch (err) {
      // never crash app due to logging failure
      console.log("Logging failed (non-blocking)");
    }
  });

  next();
});

/* ✅ ADD ROUTES HERE (IMPORTANT PLACE) */
const depotRoutes = require("./routes/depotRoutes");
app.use("/", depotRoutes);

/* Test route */
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

/* Start server */
app.listen(3000, () => {
  console.log("Server running on port 3000");
});