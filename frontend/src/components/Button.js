import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => (props.primary ? "#007bff" : "#fff")};
  color: ${(props) => (props.primary ? "#fff" : "#007bff")};

  font-size: 1em;
  padding: 0.5em 1em;
  border: 2px solid #007bff;
  border-radius: 3px;
  cursor: pointer;
  outline: none;

  ${(props) =>
    props.iconBtn &&
    `
    font-size: 14px;
    padding: 0.5em;
    margin-right: 8px;
    min-width: 60px;
  `}

  ${(props) =>
    props.delete &&
    `
    color: red;
    border-color: red;
  `}

  ${(props) =>
    props.view &&
    `
    color: #28A747;
    border-color: #28A747;
  `}
`;

export default Button;
