"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import SearchInput from "./SearchInput";
import {
  call_icon,
  dashboard_icon,
  home_icon,
  laptop_icon,
  login_icon,
} from "@/components/assets/icons/dashboard";

const StyledNav = styled.nav`
  background: #ffffff74;
  position: sticky;
  top: 0;
  z-index: 4;
  backdrop-filter: blur(20px);

  .inner-wrapper {
    margin: auto;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    padding: 7px 30px;
    height: 60px;
    align-items: center;
  }

  ul {
    display: flex;
    gap: 20px;
    list-style: none;
    align-items: center;
  }
`;

const Logo = styled.h2`
  margin: 0;
  a {
    font-size: 30px;
    text-decoration: none;
    color: #3e68ff;
    display: flex;
    align-items: center;
    gap: 5px;

    svg {
      fill: #3e68ff;
      width: 40px;
      height: auto;
    }
  }
`;
const LoginLink = styled(Link)`
  font-size: 12px;
  text-decoration: none;
  color: #ffffff !important;
  background: #014886;
  border-radius: 5px;
  padding: 5px 7px;
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    height: 20px;
  }
`;
const IconLink = styled(Link)`
  color: #222222;
  text-decoration: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 5px;
  line-height: 18px;

  svg {
    fill: #222222;
    height: 20px;
  }
`;

const Navigation = () => {
  const session = useSession();

  console.log("session", session);
  return (
    <StyledNav>
      <div className="inner-wrapper">
        <Logo>
          <Link href="/">{laptop_icon}MCS</Link>
        </Logo>
        <SearchInput></SearchInput>
        <ul>
          <li>
            <IconLink href="/"> {home_icon} Home</IconLink>
          </li>
          <li>
            <IconLink href="/contact-us">{call_icon}Contact Us</IconLink>
          </li>

          <li>
            {session.data ? (
              <LoginLink href="/dashboard">{dashboard_icon}Dashboard</LoginLink>
            ) : (
              <LoginLink href="/login">{login_icon} Login</LoginLink>
            )}
          </li>
        </ul>
      </div>
    </StyledNav>
  );
};

export default Navigation;
