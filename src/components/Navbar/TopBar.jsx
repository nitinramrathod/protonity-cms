"use client";

import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  background: #586572;
  display: flex;
  padding: 0 10px;
  gap: 20px;
  justify-content: space-between;
  height: 50px;
  align-items: center;

  .heading{
    font-size: 26px;
    color: white;
  }

  .avatar{
    width: 40px;
    margin: 0;
    aspect-ratio: 1/1;
    object-fit: cover;
    height: 40px;

    display: grid;
    place-content: center;
    border: none;
    background: linear-gradient(#31a9df, #848484);
    padding: 7px 15px;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    font-weight: 600;
  }
`;

const TopBar = () => {
  return (
    <Wrapper>
      <h1 className="heading">MCS</h1>
      <p className="avatar">NR</p>
    </Wrapper>
  );
};

export default TopBar;
