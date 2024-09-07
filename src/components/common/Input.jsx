"use client";
import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  label{
    padding-bottom: 10px;
  }

  &.light-input{
    label{
      color: white;
    }
  }



`;

const StyledInput = styled.input`
  outline: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
  text-align: left;
  padding: 10px 15px;
  border: 1px solid ${({error})=>error ? 'red': 'grey'};
  transition: all .3s ease;
  border-radius: 7px;

  &:focus {
    border-color: #55a1f3;
    box-shadow: 0 0 0 3px #2195f332;
    
  }
  &:disabled {
    background-color: #f8f9fa;
    cursor: not-allowed;
  }

`;

const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
`;

const StyledError = styled.p`
  margin: 0;
  color: red;
  font-size: 12px;
  font-weight: 400;
  line-height: 25px;
`;

function Input({
  name = "input_name",
  value = "",
  placeholder = "Input placeholder",
  onChange = (e) => {
    console.log(e);
  },
  type = "text",
  className,
  required = false,
  label = "Input label",
  id = "input_id",
  error = false,
  disabled=false,
  innerRef
}) {
  return (
    <Wrapper className={className} disabled={disabled}>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        name={name}
        defaultValue={value}
        type={type}
        id={id}
        error={error}
        disabled={disabled}
        ref={innerRef}
      />
      {error && <StyledError>{error}</StyledError>}
    </Wrapper>
  );
}

export default Input;
