"use client";
import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react"
import { usePathname } from "next/navigation";

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
    font-size: 18px;
    font-weight: 700;
    padding: 10px;
    color: #e5e5e5;
    border-radius: 10px;
    cursor: pointer;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.5s ease;   
    padding: 7px 10px;
    border-radius: 5px;

    &:hover, &.active {
      color: #0e5ba7;
      background: #e8e8e8;
    }
  }
`;

const Sidebar = ({ className }) => {

  const pathname = usePathname();

  const isActive = (link)=>{
    return pathname == link ? "active" : ""
  }

  return (
    <Wrapper className={className}>
      <div className="navigation-wrapper">
        <Link className={isActive('/dashboard')} href="/dashboard">Dashboard</Link>
        <Link className={isActive('/dashboard/users')} href="/dashboard/users">Users</Link>
        <Link className={isActive('/dashboard/enquiries')} href="/dashboard/enquiries">Enquiries</Link>
        <Link className={isActive('/')} href="/">Home</Link>
      </div>
      <button className="logout" onClick={()=>signOut()}>Log Out</button>
    </Wrapper>
  );
};

export default Sidebar;
