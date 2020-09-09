import React, { useState, useEffect } from "react";

import { listEmployees } from "../../apis/employee";
import { listReviews } from "../../apis/reviews";

import Header from "../../components/Header";
import SecTitle from "../../components/SecTitle";

import AddEmployeeForm from "./AddEmployeeForm";
import EmployeeList from "./EmployeeList";
import AddPerformanceReviewForm from "./AddPerformanceReviewForm";
import PerformanceReviewList from "./PerformanceReviewList";

export const AdminPageContext = React.createContext({});

function AdminPage() {
  const [employeeList, setEmployeeList] = useState([]);
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    fetchEmployees();
    fetchReviews();
  }, []);

  const fetchEmployees = async () => {
    const result = await listEmployees();
    setEmployeeList(result.data.users);
  };

  const fetchReviews = async () => {
    const result = await listReviews();
    setReviewList(result.data.reviews);
  };

  return (
    <AdminPageContext.Provider value={{ fetchEmployees, fetchReviews }}>
      <Header>Admin</Header>
      <SecTitle>Employees: </SecTitle>
      <EmployeeList employeeList={employeeList} />
      <AddEmployeeForm />

      <SecTitle>Performance Reviews: </SecTitle>
      <PerformanceReviewList reviewList={reviewList} />
      <AddPerformanceReviewForm employeeList={employeeList} />
    </AdminPageContext.Provider>
  );
}
export default AdminPage;
