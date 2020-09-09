import React from "react";
import styled from "styled-components";

const ENTER = "Enter";

const InputFieldStyled = styled.div`
  height: 48px;
  margin: 8px 0;
  display: flex;
  align-items: center;

  label {
    margin-right: 8px;
  }

  input {
    flex: 1;
    padding: 12px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;

const InputField = ({ inputEl, label, defaultValue, onEnter }) => {
  const handleKeyPress = (e) => {
    if (e.key === ENTER) {
      onEnter();
    }
  };

  return (
    <InputFieldStyled>
      <label>{label}</label>
      <input
        ref={inputEl}
        type="text"
        placeholder="please enter here"
        defaultValue={defaultValue}
        onKeyPress={handleKeyPress}
      />
    </InputFieldStyled>
  );
};

export default InputField;
