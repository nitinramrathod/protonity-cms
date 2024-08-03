"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react"

const StyledNav = styled.nav`
  background: grey;
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  height: 70px;
  align-items: center;

  ul {
    display: flex;
    gap: 20px;
    list-style: none;
    align-items: center;

    li {
      a {
        color: white;
        text-decoration: none;
        font-size: 16px;
      }
    }
  }
`;

const Logo = styled.h2`
  margin: 0;
  a{
    font-size: 26px;
    text-decoration: none;
    color: white;
    text-shadow: 0 0 5px #707070;
  }
`;

const Navigation = () => {

  const session = useSession()

  console.log('session', session)
  return (
    <StyledNav>
      <Logo>
        <Link href="/">MCS</Link>
      </Logo>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>

        <li>
          {session.data ? <Link href="/dashboard">Dashboard</Link> : <Link href="/login">Login</Link> }          
        </li>
      </ul>
    </StyledNav>
  );
};

export default Navigation;
