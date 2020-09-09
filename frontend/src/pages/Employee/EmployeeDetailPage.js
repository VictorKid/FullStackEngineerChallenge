import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header";
import SecTitle from "../../components/SecTitle";

import EmployeeReviewList from "./EmployeeReviewList";

import { listReviewsByReviewerId } from "../../apis/reviews";

export const EmployeeDetailPageContext = React.createContext({});

const EmployeeDetailPage = () => {
  let { employeeId } = useParams();

  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const result = await listReviewsByReviewerId({ userId: employeeId });
      setReviewList(result.data.reviews);
    };

    fetchReviews();
  }, [employeeId]);

  return (
    <EmployeeDetailPageContext.Provider
      value={{
        listReviews: async () => {
          const result = await listReviewsByReviewerId({ userId: employeeId });
          setReviewList(result.data.reviews);
        },
      }}
    >
      <Header>EmployeeDetailPage</Header>
      <SecTitle>Employee Review List: </SecTitle>
      <EmployeeReviewList reviewList={reviewList} />
    </EmployeeDetailPageContext.Provider>
  );
};

export default EmployeeDetailPage;
