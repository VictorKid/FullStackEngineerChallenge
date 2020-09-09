import React, { useState, useContext } from "react";
import styled from "styled-components";

import Button from "../../components/Button";
import Modal from "../../components/Modal";
import SelectField from "../../components/SelectField";

import { AdminPageContext } from "./AdminPage";

import { addReview } from "../../apis/reviews";

const ErrMsg = styled.div`
  font-size: 14px;
  color: red;
  margin: 8px 0;
`;

function AddEmpoyeeForm({ employeeList }) {
  const context = useContext(AdminPageContext);
  const [isOpen, setIsOpen] = useState(false);
  const [reviewerId, setReviewerId] = useState("");
  const [revieweeId, setRevieweeId] = useState("");
  const [showErrMsg, setShowErrMsg] = useState(false);

  const handlerAddEmployee = () => {
    setIsOpen(true);
  };

  const handlerClose = () => {
    setIsOpen(false);
  };

  const handlerSelectReviewer = (value) => {
    setReviewerId(value);
    setShowErrMsg(false);
  };

  const handlerSelectReviewee = (value) => {
    setRevieweeId(value);
    setShowErrMsg(false);
  };

  const handleSubmit = async () => {
    if (revieweeId && reviewerId) {
      await addReview({
        reviewerId,
        revieweeId,
      });
      context.fetchReviews();
      handlerClose();
    } else {
      setShowErrMsg(true);
    }
  };

  return (
    <>
      <Button primary onClick={handlerAddEmployee}>
        Add Performance Review
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={handlerClose}
        title="Add Performance Review"
      >
        <div>
          <SelectField
            label="Select Reviewer: "
            options={employeeList.map((employee) => ({
              key: employee.uuid,
              value: employee.uuid,
              label: employee.name,
            }))}
            onSelect={handlerSelectReviewer}
          />
          <SelectField
            label="Select Reviewee: "
            options={employeeList.map((employee) => ({
              key: employee.uuid,
              value: employee.uuid,
              label: employee.name,
            }))}
            onSelect={handlerSelectReviewee}
          />
          {showErrMsg ? (
            <ErrMsg>Please select reviewer and reviwee</ErrMsg>
          ) : null}
          <Button primary onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Modal>
    </>
  );
}
export default AddEmpoyeeForm;
