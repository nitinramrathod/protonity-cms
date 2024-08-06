"use client";

import styled from "@emotion/styled";
import React from "react";
const Wrapper = styled.div`
  max-width: 600px;
  width: 70%;
  input {
    padding: 10px 15px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #d0d0d0;
    background: #eaeaeaaa;
    font-size: 16px;
    line-height: 18px;

    &:focus {
      outline: none;
    }
  }
`;
const SearchInput = () => {
  return (
    <Wrapper>
      <input type="text" placeholder="Search Product here"/>
    </Wrapper>
  );
};

export default SearchInput;
