import React from "react";
import styled from "styled-components";

const ENTER = "Enter";

const TextareaStyled = styled.div`
  height: 60px;
  margin: 8px 0 16px 0;
  display: flex;
  align-items: center;

  label {
    margin-right: 8px;
  }

  textarea {
    flex: 1;
    padding: 12px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;

const TextareaField = ({ inputEl, label, defaultValue, onEnter }) => {
  const handleKeyPress = (e) => {
    if (e.key === ENTER) {
      onEnter();
    }
  };

  return (
    <TextareaStyled>
      <label>{label}</label>
      <textarea
        ref={inputEl}
        type="text"
        placeholder="please enter here"
        defaultValue={defaultValue}
        onKeyPress={handleKeyPress}
      />
    </TextareaStyled>
  );
};

export default TextareaField;
