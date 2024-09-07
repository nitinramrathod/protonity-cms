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
    color: white;
  }

`;

const StyledTextarea = styled.textarea`
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
    box-shadow: 0 0 0 3px #2195f332;
    border-color: #55a1f3;
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

function Textarea({
  name = "input_name",
  value = "",
  placeholder = "Input placeholder",
  onChange = (e) => {
    console.log(e);
  },
  required = false,
  label = "Input label",
  id = "input_id",
  error = false,
  disabled=false,
  innerRef,
  className,
  rows=4,
  cols=4,   

}) {
  return (
    <Wrapper className={className} disabled={disabled}>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledTextarea
        cols={cols}
        rows={rows}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        name={name}
        defaultValue={value}
        id={id}
        error={error}
        disabled={disabled}
        ref={innerRef}
      />
      {error && <StyledError>{error}</StyledError>}
    </Wrapper>
  );
}

export default Textarea;
