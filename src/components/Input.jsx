"use client";

import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    padding: 10px 14px;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 600px;
  margin: auto;
  padding: 40px;
`;

const Input = ({ id, labelText, placeholder, onChange, value = "" }) => {
  return (
    <Wrapper>
      <label htmlFor={id}>{labelText}</label>
      <input type="text" defaultValue={value} />
    </Wrapper>
  );
};

export default Input;
