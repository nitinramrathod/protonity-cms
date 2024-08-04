"use client";

import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  background: #202932;
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

const TopBar = ({session}) => {
  const avatar = session?.name?.split(" ")[0].charAt(0).toUpperCase() + (session?.name?.split(" ")[1]?.charAt(0)?.toUpperCase() || '')
  return (
    <Wrapper>
      <h1 className="heading">MCS</h1>
      <p title={session?.name} className="avatar">{avatar}</p>
    </Wrapper>
  );
};

export default TopBar;
