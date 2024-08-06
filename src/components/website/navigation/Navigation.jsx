"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import SearchInput from "./SearchInput";

const StyledNav = styled.nav`
  background: #eeeeee74;

  display: flex;
  justify-content: space-between;
  padding: 7px 30px;
  height: 60px;
  align-items: center;

  ul {
    display: flex;
    gap: 20px;
    list-style: none;
    align-items: center;

    li {
      a {
        color: #222222;
        text-decoration: none;
        font-size: 16px;
      }
    }
  }
`;

const Logo = styled.h2`
  margin: 0;
  a {
    font-size: 26px;
    text-decoration: none;
    color: #2d2d2d;
    text-shadow: 0 0 5px #707070;
  }
`;
const LoginLink = styled(Link)`
  font-size: 12px;
  text-decoration: none;
  color: #ffffff !important;
  background: #014886;
  border-radius: 5px;
  padding: 5px 7px;
`;

const Navigation = () => {
  const session = useSession();

  console.log("session", session);
  return (
    <StyledNav>
      <Logo>
        <Link href="/">MCS</Link>
      </Logo>
      <SearchInput></SearchInput>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>

        <li>
          {session.data ? (
            <LoginLink href="/dashboard">Dashboard</LoginLink>
          ) : (
            <LoginLink href="/login">Login</LoginLink>
          )}
        </li>
      </ul>
    </StyledNav>
  );
};

export default Navigation;
