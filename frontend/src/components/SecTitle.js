import React from "react";
import styled from "styled-components";

const SecTitleStyled = styled.div`
  font-size: ${(props) => props.theme.fontSize.secTitle};
  font-weight: ${(props) => props.theme.fontWeight.secTitle};
  color: ${(props) => props.theme.fontColor.secTitle};
  margin: 16px 0;
`;

const SecTitle = ({ children }) => {
  return <SecTitleStyled>{children}</SecTitleStyled>;
};

export default SecTitle;
