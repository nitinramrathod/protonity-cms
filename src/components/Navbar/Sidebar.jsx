"use client";
import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react"

const Wrapper = styled.div`
  background: linear-gradient(#49545e, #586572);
  padding: 40px 20px;

  min-width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .navigation-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .logout{
    background: transparent;
    border: none;
    text-align: left;
    color: #e4e4e4;
    font-size: 16px;
    padding: 10px;
    background: #9a9a9a;
    border-radius: 10px;
    cursor: pointer;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 14px;
    transition: all 0.5s ease;
   
    padding: 7px 10px;
    border-radius: 5px;

    &:hover {
      color: #0e5ba7;
      background: #e8e8e8;
    }
  }
`;

const Sidebar = ({ className }) => {
  return (
    <Wrapper className={className}>
      <div className="navigation-wrapper">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/enquiries">Enquiries</Link>
        <Link href="/dashboard/users">Users</Link>
        <Link href="/dashboard/users/add">Add User</Link>
        <Link href="/contact-us">Contact Us</Link>
        <Link href="/">Home</Link>
      </div>
      <button className="logout" onClick={()=>signOut()}>Log Out</button>
    </Wrapper>
  );
};

export default Sidebar;
