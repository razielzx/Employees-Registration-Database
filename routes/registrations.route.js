const express = require("express");

const {
  getAllRegistrations,
  getRegistrationsById,
  createRegistrations,
  updateRegistrations,
  disableRegistrations,
} = require("../controllers/registrations.controllers");

const registrationsRoutes = express.Router();

registrationsRoutes.get("/", getAllRegistrations);
registrationsRoutes.get("/:id", getRegistrationsById);
registrationsRoutes.post("/", createRegistrations);
registrationsRoutes.patch("/:id", updateRegistrations);
registrationsRoutes.delete("/:id", disableRegistrations);

module.exports = {
  registrationsRoutes,
};