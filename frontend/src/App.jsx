import { useEffect, useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

import {
  getEmployees,
  saveEmployee,
  updateEmployee as updateEmpApi,
  deleteEmployee as deleteEmpApi,
} from "./services/EmployeeService";

import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = () => {
    getEmployees().then((response) => {
      setEmployees(response.data);
    });
  };

  const addEmployee = (employee) => {
    saveEmployee(employee).then(() => {
      loadEmployees();
    });
  };

  const updateEmployee = (employee) => {
    updateEmpApi(employee.id, employee).then(() => {
      loadEmployees();
      setSelectedEmployee(null);
    });
  };

  const deleteEmployee = (id) => {
    deleteEmpApi(id).then(() => {
      loadEmployees();
    });
  };

  const editEmployee = (employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <div className="container">
      <h1>Employee Management System</h1>

      <EmployeeForm
        addEmployee={addEmployee}
        selectedEmployee={selectedEmployee}
        updateEmployee={updateEmployee}
      />

      <EmployeeList
        employees={employees}
        editEmployee={editEmployee}
        deleteEmployee={deleteEmployee}
      />
    </div>
  );
}

export default App;