"use client";
import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

const Wrapper = styled.div`
  background: #586572;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 120px;

  a{
    color: white;
    text-decoration: none;
    font-size: 14px;
    transition: all .5s ease;

    &:hover{
      color: #59feb1;
    }
  }
`;

const Sidebar = () => {
  return (
    <Wrapper>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/dashboard/enquiries">Enquiries</Link>
      <Link href="/dashboard/users">Users</Link>
      <Link href="/contact-us">Contact Us</Link>
      <a href="#">Log Out</a>
    </Wrapper>
  );
};

export default Sidebar;
