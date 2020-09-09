import React, { useState, useRef, useContext } from "react";

import Button from "../../components/Button";
import Modal from "../../components/Modal";
import TextareaField from "../../components/TextareaField";

import { AdminPageContext } from "../Admin/AdminPage";
import { EmployeeDetailPageContext } from "./EmployeeDetailPage";

import { updateReview } from "../../apis/reviews";

function EditReviewForm({ review }) {
  const adminPageContext = useContext(AdminPageContext);
  const employeeDetailPageContext = useContext(EmployeeDetailPageContext);
  const [isOpen, setIsOpen] = useState(false);
  const inputEl = useRef(null);

  const handlerAddEmployee = () => {
    setIsOpen(true);
  };

  const handlerClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    const inputValue = inputEl.current.value;
    await updateReview({
      reviewId: review.uuid,
      comments: inputValue,
    });
    if (adminPageContext.fetchReviews) adminPageContext.fetchReviews();
    if (employeeDetailPageContext.listReviews)
      employeeDetailPageContext.listReviews();
    handlerClose();
  };

  return (
    <>
      <Button iconBtn onClick={handlerAddEmployee}>
        Edit
      </Button>
      <Modal isOpen={isOpen} onClose={handlerClose} title="Write Feedback">
        <div>
          <TextareaField
            inputEl={inputEl}
            label="Feedback: "
            defaultValue={review.comments}
            onEnter={handleSubmit}
          />
          <Button primary onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Modal>
    </>
  );
}
export default EditReviewForm;
