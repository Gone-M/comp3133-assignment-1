const Employee = require("../models/Employee");

const employeeResolvers = {
  Query: {
    getAllEmployees: async () => await Employee.find(),
    searchEmployeeById: async (_, { eid }) => await Employee.findById(eid),
    searchEmployeeByDesignationOrDepartment: async (_, { designation, department }) => {
      const filter = {};
      if (designation) filter.designation = designation;
      if (department) filter.department = department;
      return await Employee.find(filter);
    },
  },
  Mutation: {
    addEmployee: async (_, args) => {
      const newEmployee = new Employee(args);
      return await newEmployee.save();
    },
    updateEmployeeById: async (_, { eid, ...updates }) => {
      return await Employee.findByIdAndUpdate(eid, updates, { new: true });
    },
    deleteEmployeeById: async (_, { eid }) => {
      await Employee.findByIdAndDelete(eid);
      return "Employee deleted successfully";
    },
  },
};

module.exports = employeeResolvers;
