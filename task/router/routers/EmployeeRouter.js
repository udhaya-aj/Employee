var express = require("express");
var router = express.Router();
var controller = require("../../Controller/EmployeeController")
router.post("/create_employee", controller.create_Employee);
router.get("/search_employee/:id", controller.search_Employee_for_update);
router.put("/update_employee", controller.update_Employee);
router.delete("/delete_employee/:id", controller.delete_Employee);
router.get("/get_employee", controller.get_all_Employee);

module.exports = router;