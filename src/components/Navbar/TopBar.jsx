"use client";

import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  background: #586572;
  display: flex;
  padding: 10px;
  gap: 20px;
  justify-content: space-between;
  height: 50px;

  .heading{
    font-size: 26px;
    color: white;
  }

  .logout{
    border: none;
    background: linear-gradient(#31a9df, #848484);
    padding: 7px 15px;
    border-radius: 20px;
    color: white;
    cursor: pointer;
    font-weight: 600;
  }
`;

const TopBar = () => {
  return (
    <Wrapper>
      <h1 className="heading">MCS</h1>
      <button className="logout">Log Out</button>
    </Wrapper>
  );
};

export default TopBar;
