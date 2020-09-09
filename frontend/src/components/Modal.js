import React from "react";
import styled, { keyframes } from "styled-components";

import SecTitle from "./SecTitle";

const ModalContainer = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const animatetop = keyframes`
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
`;

const ModalContent = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  animation-name: ${animatetop};
  animation-duration: 0.4s;
`;

const ModalHeader = styled.div`
  padding: 2px 16px;
  color: white;
`;

const CloseBtn = styled.span`
  color: #000;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: #666;
    text-decoration: none;
    cursor: pointer;
  }
`;

const ModalBody = styled.div`
  padding: 8px 16px;
`;

const Modal = ({ children, isOpen, onClose, title }) => {
  const handlerClickContent = (e) => {
    e.stopPropagation();
  };

  return (
    <ModalContainer isOpen={isOpen} onClick={onClose}>
      <ModalContent onClick={handlerClickContent}>
        <ModalHeader>
          <CloseBtn onClick={onClose}>&times;</CloseBtn>
          <SecTitle>{title}</SecTitle>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
