import axios from "axios";

const API_URL = "http://localhost:8080/employee";

export const getEmployees = () => {
  return axios.get("http://localhost:8080/employee/all");
};

export const saveEmployee = (employee) => {
  return axios.post("http://localhost:8080/employee/save", employee);
};

export const updateEmployee = (id, employee) => {
  return axios.put(`http://localhost:8080/employee/update/${id}`, employee);
};

export const deleteEmployee = (id) => {
  return axios.delete(`http://localhost:8080/employee/delete/${id}`);
};