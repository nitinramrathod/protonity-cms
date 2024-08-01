"use client";

import styled from "@emotion/styled";
import Link from "next/link";

export const Heading = styled.h2`
  font-size: 48px;
  line-height: 50px;
  color: #323232;
  font-weight: 700;
`;
export const SubHeading = styled.p`
  font-size: 32px;
  line-height: 34px;
  color: #242476;
  font-weight: 500;
`;
export const LinkButton = styled(Link)`
  font-size: 16px;
  line-height: 18px;
  color: #242476;
  font-weight: 500;
  background: ${({ bordered }) => (bordered ? "transparent" : "#15a9ba")};
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  color: ${({ bordered }) => (bordered ? "#15a9ba" : "white")};
  border: ${({ bordered }) => (bordered ? "2px solid #15a9ba" : "none")};
`;

export const Wrapper = styled.section`
  background: linear-gradient(45deg, #c0ffeb, #b688ff);
  height: calc(100vh - 70px);

  .heading-wrapper {
    max-width: 900px;
    margin: 0 auto;
    padding-top: 150px;
    padding-bottom: 50px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .button-wrapper {
    margin-top: 40px;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 30px;
  }
`;
