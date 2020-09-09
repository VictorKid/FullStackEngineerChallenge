import React, { useState, useRef, useContext } from "react";

import Button from "../../components/Button";
import Modal from "../../components/Modal";
import InputField from "../../components/InputField";

import { AdminPageContext } from "./AdminPage";

import { updateEmployee } from "../../apis/employee";

function EditmpoyeeForm({ employee }) {
  const context = useContext(AdminPageContext);
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
    await updateEmployee({
      userId: employee.uuid,
      name: inputValue,
    });
    context.fetchEmployees();
    handlerClose();
  };

  return (
    <>
      <Button iconBtn onClick={handlerAddEmployee}>
        Edit
      </Button>
      <Modal isOpen={isOpen} onClose={handlerClose} title="Edit Employee">
        <div>
          <InputField
            inputEl={inputEl}
            label="Employee Name: "
            defaultValue={employee.name}
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
export default EditmpoyeeForm;
