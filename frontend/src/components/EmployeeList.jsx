function EmployeeList({ employees, editEmployee, deleteEmployee }) {
  return (
    <div>
      <h2>Employee List</h2>

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Company</th>
            <th>Designation</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.empname}</td>
              <td>{emp.salary}</td>
              <td>{emp.company}</td>
              <td>{emp.designation}</td>

              <td>
                <button onClick={() => editEmployee(emp)}>
                  Edit
                </button>

                <button
                  onClick={() => deleteEmployee(emp.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;