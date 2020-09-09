import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.div`
  font-size: ${(props) => props.theme.fontSize.header};
  font-weight: ${(props) => props.theme.fontWeight.header};
  color: ${(props) => props.theme.fontColor.header};
`;

const Header = ({ children }) => {
  return <HeaderStyled>You are in: {children} Page</HeaderStyled>;
};

export default Header;
