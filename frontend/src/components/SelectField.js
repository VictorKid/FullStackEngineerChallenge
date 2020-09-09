import React from "react";
import styled from "styled-components";

const SelectieldStyled = styled.div`
  height: 48px;
  margin: 8px 0;
  display: flex;
  align-items: center;

  label {
    margin-right: 8px;
  }

  select {
    flex: 1;
    padding: 12px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;

const SelectField = ({ label, options, onSelect }) => {
  const ghostOption = { key: "ghost", value: null, label: "" };
  options.unshift(ghostOption);
  const handleSelect = (e) => {
    onSelect(e.target.value);
  };
  return (
    <SelectieldStyled>
      <label>{label}</label>

      <select onChange={handleSelect}>
        {options.map((option) => {
          return (
            <option key={option.key} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </SelectieldStyled>
  );
};

export default SelectField;
