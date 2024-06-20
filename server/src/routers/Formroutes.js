const express = require("express");
const formRoutes = express.Router();
const Formcontroller = require('../controllers/Formcontroller');

formRoutes.post('/',Formcontroller.createFormcontroller);

module.exports = formRoutes