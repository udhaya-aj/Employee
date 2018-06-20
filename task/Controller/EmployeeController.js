var service = require("../Service/EmployeeService")
//var logger = require("../config/logger")
module.exports.create_Employee = function(req, res) {
  var Employee = req.body;
  //logger.info("req : create Employee in the controller",Employee)
  service.create_Employee(Employee,function (Employee){
  if(Employee == '' || Employee == undefined || Employee == null )   
{
     // logger.debug(" res : created Employee is either empty or null in the controller ");
      res.status(204);
      res.json(Employee);
    }
  else if(Employee._doc || Employee.length > 0 ){
     //logger.info("res : created Employee in the controller",Employee._doc)
     res.status(201);
     res.json(Employee);
  }
  else{
   // logger.error("res : cannot created Employee in controller");
     res.status(500)
     res.json(Employee);
  }

  });
}
module.exports.update_Employee = function(req, res) {
  var Employee = req.body;
 // logger.info("req : Update Employee in the controller",Employee)
  service.update_Employee(Employee,function (Employee){
  if(Employee == '' || Employee == undefined || Employee == null )   
{
     // logger.debug(" res : Employeedetail updated  is either empty or null in the controller ");
      res.status(204);
      res.json(Employee);
    }
  else if(Employee._doc || Employee.length > 0 ){
    // logger.info("res : Employeedetail updated  in the controller",Employee._doc)
     res.status(200);
     res.json(Employee);
  }
  else{
    //logger.error("res : cannot Employeedetail updated  in controller");
     res.status(500)
     res.json(Employee);
  }

  });
}
module.exports.search_Employee_for_update = function(req, res) {
  var Employee_id = req.params.id;
 // logger.info("req : search Employee for update in the controller",Employee_id)
  service.search_Employee_for_update(Employee_id,function (Employee){
  if(Employee == '' || Employee == undefined || Employee == null )   
{
     // logger.debug(" res : search Employee for update details is obtained is either empty or null in the controller ");
      res.status(304);
      res.json(Employee);
    }
  else if(Employee._doc || Employee.length > 0 ){
    // logger.info("res : search Employee for update details is obtained in the controller",Employee._doc)
     res.status(202);
     res.json(Employee);
  }
  else{
   // logger.error("res : cannot search Employee for update details is obtained in controller");
     res.status(500)
     res.json(Employee);
  }

  });
}
module.exports.delete_Employee = function(req, res) {
  var Employee_id = req.params.id;
 // logger.info("req : deleteEmployee in the controller",Employee_id)
  service.delete_Employee(Employee_id,function (Employee){
  if(Employee == '' || Employee == undefined || Employee == null )   
{
     // logger.debug(" res : Employee deleted is either empty or null in the controller ");
      res.status(204);
      res.json(Employee);
    }
  else if(Employee._doc || Employee.length > 0 ){
    // logger.info("res : Employee deleted in the controller",Employee._doc)
     res.status(204);
     res.json(Employee);
  }
  else{
    //logger.error("res : cannot Employee deleted in controller");
     res.status(500)
     res.json(Employee);
  }

  });
}
module.exports.get_all_Employee = function(req, res) {
  //logger.info("req : get all Employee in the controller")
  service.get_all_Employee(function (Employee){
  if(Employee == '' || Employee == undefined || Employee == null )   
{
    //  logger.debug(" res : get all Employeedetails  is either empty or null in the controller ");
      res.status(204);
      res.json(Employee);
    }
  else if(Employee._doc || Employee.length > 0 ){
  //   logger.info("res : get all Employeedetails  in the controller",Employee._doc)
     res.status(200);
     res.json(Employee);
  }
  else{
  //  logger.error("res : cannot get all Employeedetails  in controller");
     res.status(500)
     res.json(Employee);
  }

  });
}