const express = require("express");
const rootRouter = express.Router();

const formRoutes = require('./Formroutes');
rootRouter.use('/form',formRoutes);
module.exports = rootRouter;