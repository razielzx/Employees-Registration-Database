const express = require("express");

//database
const { db, DataTypes } = require("./utils/database.util");

//model registrations
const { Registrations } = require("./models/registrations.model");

//routes
const { registrationsRoutes } = require("./routes/registrations.route");

//create server
const app = express();

// json
app.use(express.json());

//routes
app.use("/api/v1/registrations", registrationsRoutes);

app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    messegen: "error",
  });
});
module.exports = {
  app,
};