var Employee_schema = require("../Model/Employee")
// var logger = require("../config/logger")
  module.exports.create_Employee = function(Employee,callback) {
  var Employee = new Employee_schema(Employee)
  //logger.info("req : create Employee in the dao",Employee)
  Employee.save( function(error , Employee) {
    if (error) {
  //logger.error("res : cannot create Employee in the dao",error)
      callback(error);
    }
    else if(Employee === null || Employee === undefined || Employee.length === 0){
     // logger.debug(" created Employee is either undefined or null in the dao ")
      callback(Employee);
    }
     else {
 // logger.info("res :  created Employee in the dao",Employee._doc)
      callback(Employee);
    }
  });
}
  module.exports.update_Employee = function(Employee,callback) {
  //logger.info("req : update Employee in the dao",Employee)
  Employee_schema.findOneAndUpdate({ _id:Employee._id },{ $set:Employee},{ upsert: true, new: true },  function(error , Employee) {
    if (error) {
 // logger.error("res : cannot update Employee in the dao",error)
      callback(error);
    }
    else if(Employee === null || Employee === undefined || Employee.length === 0){
     // logger.debug(" updated Employee details obtained is either undefined or null in the dao ")
      callback(Employee);
    }
     else {
  //logger.info("res :  updated Employee details obtained in the dao",Employee._doc)
      callback(Employee);
    }
  });
}
  module.exports.search_Employee_for_update = function(Employee_id,callback) {
  //logger.info("req : search Employee for update in the dao",Employee_id)
  Employee_schema.findById({ _id: Employee_id },  function(error , Employee) {
    if (error) {
  //logger.error("res : cannot search Employee for update in the dao",error)
      callback(error);
    }
    else if(Employee === null || Employee === undefined || Employee.length === 0){
     // logger.debug(" search Employee for update details obtained is either undefined or null in the dao ")
      callback(Employee);
    }
     else {
  //logger.info("res :  search Employee for update details obtained in the dao",Employee._doc)
      callback(Employee);
    }
  });
}
  module.exports.delete_Employee = function(Employee_id,callback) {
 // logger.info("req : delete Employee in the dao",Employee_id)
  Employee_schema.findByIdAndRemove(Employee_id,  function(error , Employee) {
    if (error) {
  //logger.error("res : cannot delete Employee in the dao",error)
      callback(error);
    }
    else if(Employee === null || Employee === undefined || Employee.length === 0){
     // logger.debug(" deleted Employee is either undefined or null in the dao ")
      callback(Employee);
    }
     else {
  //logger.info("res :  deleted Employee in the dao",Employee._doc)
      callback(Employee);
    }
  });
}
  module.exports.get_all_Employee = function(callback) {
 // logger.info("req : get all Employee in the dao")
  Employee_schema.find( function(error , Employee) {
    if (error) {
 // logger.error("res : cannot get all Employee in the dao",error)
      callback(error);
    }
    else if(Employee === null || Employee === undefined || Employee.length === 0){
     // logger.debug(" get all Employee details obtained is either undefined or null in the dao ")
      callback(Employee);
    }
     else {
 // logger.info("res :  get all Employee details obtained in the dao",Employee._doc)
      callback(Employee);
    }
  });
}