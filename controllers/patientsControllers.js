const { StatusCodes } = require('http-status-codes');

const { Patient } = require('../models');

const getAllPatients = async (req, res) => {
  try {
    const patientsAll = await Patient.findAll();

    return res.status(StatusCodes.OK).json(patientsAll);
  } catch (err) {
    console.log(err.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
};

module.exports = { getAllPatients };
