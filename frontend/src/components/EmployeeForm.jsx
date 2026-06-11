import { useState, useEffect } from "react";

function EmployeeForm({ addEmployee, selectedEmployee, updateEmployee }) {
  const [employee, setEmployee] = useState({
    empname: "",
    salary: "",
    company: "",
    designation: "",
  });

  useEffect(() => {
    if (selectedEmployee) {
      setEmployee(selectedEmployee);
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (employee.id) {
      updateEmployee(employee);
    } else {
      addEmployee(employee);
    }

    setEmployee({
      empname: "",
      salary: "",
      company: "",
      designation: "",
    });
  };

  return (
    <div className="form-container">
      <h2>{employee.id ? "Update Employee" : "Add Employee"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="empname"
          placeholder="Employee Name"
          value={employee.empname}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={employee.salary}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="company"
          placeholder="Company"
          value={employee.company}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="designation"
          placeholder="Designation"
          value={employee.designation}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {employee.id ? "Update" : "Save"}
        </button>
      </form>
    </div>
  );
}

export default EmployeeForm;