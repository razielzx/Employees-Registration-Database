const { Registrations } = require("../models/registrations.model");

const getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registrations.findAll();

    res.status(200).json({
      status: "succes",
      data: {
        registrations,
      },
    });
    
  } catch (error) {
    console.log(error);
  }
};
const getRegistrationsById = async (req, res) => {
  try {
    const { id } = req.params;
    const registrations = await Registrations.findOne({ where: { id } });

    if (!registrations) {
      return res.status(404).json({
        status: "error",
        menssenger: "registrations no found",
      });
    }

    res.status(200).json({
      status: "succes",
      data: {
        registrations,
      },
    });

  } catch (error) {
    console.log(error);
  }
};
const createRegistrations = async (req, res) => {
  try {
    const { entranceTime } = req.body;
    const registrations = await Registrations.create({ entranceTime });

    res.status(200).json({
      status: "succes",
      data: {
        registrations,
      },
    });

  } catch (error) {
    console.log(error);
  }
};
const updateRegistrations = async (req, res) => {
  try {
    const { id } = req.params;
    const { exitTime } = req.body;

    const registrations = await Registrations.findOne({ where: { id } });

    if (!registrations) {
      return res.status(404).json({
        status: "error",
        menssenger: "registrations no found",
      });
    }

    await registrations.update({ exitTime });

    res.status(200).json({
      status: "succes",
      data: {
        registrations,
      },
    });

  } catch (error) {
    console.log(error);
  }
};

const disableRegistrations = async (req, res) => {
  try {
    const { id } = req.params;
    const registrations = await Registrations.findOne({ where: { id } });
    
    if (!registrations) {
      return res.status(404).json({
        status: "error",
        menssenger: "registrations no found",
      });
    }

    await registrations.update({ status: "disable" });
    
    res.status(200).json({
      status: "succes",
      data: {
        registrations,
      },
    });
    
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getAllRegistrations,
  getRegistrationsById,
  createRegistrations,
  updateRegistrations,
  disableRegistrations,
};