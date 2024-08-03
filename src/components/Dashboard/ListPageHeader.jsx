"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

const Wrapper = styled.div`
  background: #53677a;
  border-radius: 5px;
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .right-content {
    display: flex;
    gap: 10px;
  }
`;

const H2 = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: white;
`;

const AddButton = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  background: linear-gradient(#16d65d, #119742);
  text-align: center;
  text-decoration: none;
  color: white;
  border-radius: 5px;
  padding: 10px;
  align-self: center;
`;

const Stat = styled.div`
  display: flex;
  gap: 10px;

  p {
    font-size: 16px;
    color: white;
    background: #4581b8;
    padding: 5px 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      height: 25px;
      aspect-ratio: 1/1;
      background: #26a7d7;
      display: grid;
      place-content: center;
      border-radius: 5px;
    }
  }
`;

const ListPageHeader = ({ heading, buttonProps, stat }) => {
  return (
    <Wrapper>
      <H2>{heading}</H2>

      <div className="right-content">
        {stat && (
          <Stat>
            {stat.map((item, index) => (
              <p key={index}>
                {item.title}: <span>{item.count}</span>
              </p>
            ))}
          </Stat>
        )}
        <AddButton href={buttonProps?.href || ""}>
          {buttonProps?.title}
        </AddButton>
      </div>
    </Wrapper>
  );
};

export default ListPageHeader;
