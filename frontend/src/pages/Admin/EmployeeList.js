import React, { useContext } from "react";
import { withRouter } from "react-router";

import Button from "../../components/Button";
import { Table, TD, TH } from "../../components/Table";

import { AdminPageContext } from "./AdminPage";
import EditEmployeeForm from "./EditEmployeeForm";

import { deleteEmployee } from "../../apis/employee";

const Employee = withRouter(({ employee, history }) => {
  const context = useContext(AdminPageContext);
  const handlerDelete = async () => {
    await deleteEmployee({
      userId: employee.uuid,
    });
    context.fetchEmployees();
  };
  const handlerViewEmployee = async () => {
    history.push(`/employee/${employee.uuid}`);
  };
  return (
    <tr>
      <TD>{employee.name}</TD>
      <TD>
        <Button iconBtn view onClick={handlerViewEmployee}>
          View
        </Button>
        <EditEmployeeForm employee={employee} />
        <Button iconBtn delete onClick={handlerDelete}>
          Delete
        </Button>
      </TD>
    </tr>
  );
});

const EmployeeList = ({ employeeList }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TH>Name</TH>
          <TH>Actions</TH>
        </tr>
      </thead>
      <tbody>
        {employeeList.map((employee) => {
          return <Employee key={employee.uuid} employee={employee} />;
        })}
      </tbody>
    </Table>
  );
};

export default EmployeeList;
