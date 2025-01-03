import axios from "axios";
import { DELETE_EMPLOYEE, GET_ALL_EMPLOYEES } from "../constants/apiEndpoints";
import { GET_EMPLOYEE_BY_ID } from "../constants/apiEndpoints";
import { ADD_EMPLOYEE } from "../constants/apiEndpoints";
import { UPDATE_EMPLOYEE } from "../constants/apiEndpoints";

export const getAllemployees = () => {
  const apiURL = GET_ALL_EMPLOYEES;

  return axios.get(apiURL);
};

export const getEmployeebyId = (employeeId) => {
  const apiURL = `${GET_EMPLOYEE_BY_ID}${employeeId}`;

  return axios.get(apiURL);
};

export const addEmployee = (formData) => {
  const apiURL = ADD_EMPLOYEE;

  return axios.post(apiURL, formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateEmployee = (values) => {
  const apiURL = UPDATE_EMPLOYEE;

  console.log(values);

  return axios.put(apiURL, values, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteEmployee = (employeeId) => {
  const apiURL = DELETE_EMPLOYEE + employeeId;
  return axios.delete(apiURL);
};


