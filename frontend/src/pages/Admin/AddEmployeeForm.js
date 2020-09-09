import React, { useState, useRef, useContext } from "react";

import Button from "../../components/Button";
import Modal from "../../components/Modal";
import InputField from "../../components/InputField";

import { AdminPageContext } from "./AdminPage";

import { addEmployee } from "../../apis/employee";

function AddEmpoyeeForm() {
  const context = useContext(AdminPageContext);
  const [isOpen, setIsOpen] = useState(false);
  const inputEl = useRef(null);

  const handlerAddEmployee = () => {
    setIsOpen(true);
  };

  const handlerClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async () => {
    const inputValue = inputEl.current.value;
    await addEmployee({
      name: inputValue,
    });
    context.fetchEmployees();
    inputEl.current.value = "";
    handlerClose();
  };

  return (
    <>
      <Button primary onClick={handlerAddEmployee}>
        Add Employee
      </Button>
      <Modal isOpen={isOpen} onClose={handlerClose} title="Add Employee">
        <div>
          <InputField
            inputEl={inputEl}
            label="Employee Name: "
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
export default AddEmpoyeeForm;
