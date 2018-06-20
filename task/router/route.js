var express = require("express");
var api = express.Router();
var routers = require("./routers")
api.use("/EmployeeRouter", routers.EmployeeRouter);

module.exports = api;