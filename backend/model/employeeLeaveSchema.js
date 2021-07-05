const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeLeaveSchema = new Schema({
    
    yearlyLeaves: {
      type: Number
    },
    annaulLeaves: {
      type: Number,
    },
    casualLeaves: {
      type: Number
    },
  },
  );

module.exports = mongoose.model('EmployeeLeaveSchem', employeeLeaveSchema);