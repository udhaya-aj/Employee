var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var Emolyee_schema = new mongoose.Schema({
   emp_id: {type : Number},
   emp_name: {type : String},
   emp_address: {type : String},
   emp_mobile:{type : Number},
   emp_dept:{type : String},
   emp_designation:{type : String},
   emp_salary:{type : Number}
},{
    versionKey: false // You should be aware of the outcome after set to false
});
autoIncrement.initialize(mongoose);
Emolyee_schema.plugin(autoIncrement.plugin,{ model: 'Employee', startAt: 1 });
module.exports = mongoose.model('Employee', Emolyee_schema);
