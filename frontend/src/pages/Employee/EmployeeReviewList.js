import React from "react";

import { Table, TD, TH } from "../../components/Table";

import EditReviewForm from "./EditReviewForm";

const Review = ({ review }) => {
  return (
    <tr>
      <TD>{review.reviewer && review.reviewer.name}</TD>
      <TD>{review.reviewee && review.reviewee.name}</TD>
      <TD>{review.comments}</TD>
      <TD>{review.status}</TD>
      <TD>
        <EditReviewForm review={review} />
      </TD>
    </tr>
  );
};

const EmployeeReviewList = ({ reviewList }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TH>Reviewer</TH>
          <TH>Reviewee</TH>
          <TH>Comments</TH>
          <TH>Status</TH>
          <TH>Actions</TH>
        </tr>
      </thead>
      <tbody>
        {reviewList.map((review) => {
          return <Review key={review.uuid} review={review} />;
        })}
      </tbody>
    </Table>
  );
};

export default EmployeeReviewList;
