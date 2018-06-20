var dao = require("../Dao/EmployeeDoa")
// var logger = require("../config/logger")
module.exports.create_Employee = function(Employee,callback) {
 // logger.info("req : create Employee in the service",Employee)
 dao.create_Employee(Employee,function (Employee){
     if(Employee == '' || Employee == undefined || Employee == null )   
    {
     // logger.debug(" res : created Employee is either empty or null in the service ");
       callback(Employee);

    }
  else if(Employee._doc || Employee.length > 0){
    // logger.info("res : created Employee in the service",Employee._doc)
      var id = Employee._id;
      Employee.id = id;
   
      callback(Employee);
    }
    else{
     // logger.error("cannot created Employee in the service")
       callback(Employee);

    }

  });
}
module.exports.update_Employee = function(Employee,callback) {
 // logger.info("req : update Employee in the service",Employee)
 dao.update_Employee(Employee,function (Employee){
     if(Employee == '' || Employee == undefined || Employee == null )   
    {
     // logger.debug(" res : updated Employee is either empty or null in the service ");
       callback(Employee);

    }
  else if(Employee._doc || Employee.length > 0){
    // logger.info("res : updated Employee in the service",Employee._doc)
      var id = Employee._id;
      Employee.id = id;
   
      callback(Employee);
    }
    else{
     // logger.error("cannot updated Employee in the service")
       callback(Employee);

    }

  });
}
module.exports.search_Employee_for_update = function(Employee_id,callback) {
 // logger.info("req : search Employee for update in the service",Employee_id)
 dao.search_Employee_for_update(Employee_id,function (Employee){
     if(Employee == '' || Employee == undefined || Employee == null )   
    {
     // logger.debug(" res : search Employee for update obtained is either empty or null in the service ");
       callback(Employee);

    }
  else if(Employee._doc || Employee.length > 0 ){
     //logger.info("res : search Employee for update obtained in the service",Employee._doc)
      var id = Employee._id;
      Employee.id = id;
      callback(Employee)   

    }
    else{
     // logger.error("cannot search Employee for update obtained in the service")
       callback(Employee);

    }
  });
}
module.exports.delete_Employee = function(Employee_id,callback) {
 // logger.info("req : delete Employee in the service",Employee_id)
 dao.delete_Employee(Employee_id,function (Employee){
     if(Employee == '' || Employee == undefined || Employee == null )   
    {
      //logger.debug(" res : deleted Employee is either empty or null in the service ");
       callback(Employee);

    }
  else if(Employee._doc || Employee.length > 0){
   //  logger.info("res : deleted Employee in the service",Employee._doc)
   
      callback(Employee);
    }
    else{
     // logger.error("cannot deleted Employee in the service")
       callback(Employee);

    }

  });
}
module.exports.get_all_Employee = function(callback) {
  //logger.info("req : get all Employee values in the service")
 dao.get_all_Employee(function (list_of_Employee){
     if(list_of_Employee == '' || list_of_Employee == undefined || list_of_Employee == null )   
    {
     // logger.debug(" res : get all Employee values are obtained is either empty or null in the service ");
       callback(list_of_Employee);

    }
  else if(list_of_Employee._doc || list_of_Employee.length > 0 ){
     //logger.info("res : get all Employee values are obtained in the service",list_of_Employee._doc)
      var count = 0;
       for(var i = 0; i<list_of_Employee.length; i++){
       var id = list_of_Employee[i]._id; 
       list_of_Employee[i].id = id;
       count ++;
       }
       if(list_of_Employee.length === count)
      callback(list_of_Employee)   

    }
    else{
     // logger.error("cannot get all Employee values are obtained in the service")
       callback(list_of_Employee);

    }
  });
}