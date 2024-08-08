import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;

  label{
    font-size: 14px;
  }
`;

const Select = ({ children, id = "checkbox-id" }) => {
  return (
    <Wrapper>
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{children}</label>
    </Wrapper>
  );
};

export default Select;
