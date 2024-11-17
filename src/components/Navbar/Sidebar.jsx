"use client";
import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react"
import { usePathname } from "next/navigation";
import { dashboard_icon, enquiry_icon, home_icon, logout_icon, users_icon } from "../assets/icons/dashboard";

const Wrapper = styled.div`
    background: linear-gradient(#36393b, #1e2f40);;
  padding: 40px 20px;
  border-right :1px solid #61696a;


  min-width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .navigation-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
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
    display: flex;
    gap: 5px;
    align-items: center;
    transition: all .3s ease;
    svg{

      transition: all .3s ease;
    }

    &:hover{
      color: #0e5ba7;
      background: #e8e8e8;
      svg{
        fill: #0e5ba7
      }
    }
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.5s ease;   
    padding: 7px 10px;
    border-radius: 5px;
    display: flex;
    gap: 5px;
    align-items: center;
    
    svg{
      transition: all 0.5s ease;   

    }

    &:hover, &.active {
      color: #0e5ba7;
      background: #e8e8e8;

      svg{
        fill: #0e5ba7;
      }
    }
  }
`;

const Sidebar = ({ className }) => {

  const pathname = usePathname();

  const isActive = (link, startWith)=>{
    if(startWith){
      return pathname.startsWith(link) ? "active" : ""
    }
    return pathname == link ? "active" : ""
  }

  return (
    <Wrapper className={className}>
      <div className="navigation-wrapper">
        <Link className={isActive('/dashboard')} href="/dashboard">{dashboard_icon}Dashboard</Link>
        <Link className={isActive('/dashboard/users', true)} href="/dashboard/users">{users_icon}Users</Link>
        <Link className={isActive('/dashboard/enquiries')} href="/dashboard/enquiries">{enquiry_icon}Enquiries</Link>
        <Link className={isActive('/dashboard/articles')} href="/dashboard/articles">{enquiry_icon}Articles</Link>
        <Link className={isActive('/dashboard/expenses')} href="/dashboard/expenses">{enquiry_icon}Expenses</Link>
        <Link className={isActive('/')} href="/">{home_icon}Home</Link>
      </div>
      <button className="logout" onClick={()=>signOut()}>{logout_icon}Log Out</button>
    </Wrapper>
  );
};

export default Sidebar;
