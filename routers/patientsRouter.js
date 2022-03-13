const express = require('express');

const router = express.Router();

const patientsController = require('../controllers/patientsControllers');

router.get('/', patientsController.getAllPatients);

module.exports = router;
