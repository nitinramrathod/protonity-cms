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

export const ProductWrapper = styled.section`
  margin: auto;
  max-width: 1200px;
  display: grid;
  gap: 20px;
  grid-template-columns: 230px auto;
  padding: 50px 20px;
  .product-container {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    @media screen and (min-width: 768px) {
      /* padding: 50px 20px; */
    }
  }
`;
export const StyledCard = styled.div`
  background: #ffffff;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ffffff;
  box-shadow: 0 0 15px #75759a38;

  .product-image {
    width: 100%;
    height: auto;
    border-radius: 7px;
  }

  .detail-wrapper {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .button-wrapper {
    padding-top: 20px;
    display: flex;
    /* background: red; */
  }

  .description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .price {
    font-size: 20px;
    font-weight: 700;
  }

  button {
    padding: 7px 12px;
    width: 100%;
    border-radius: 5px;
    outline: none;
    border: none;
    background: #014886;
    color: white;
    font-weight: 700;
  }
`;

export const Wrapper = styled.section`
  background: #f3f3f3;
  min-height: calc(100vh - 70px);
  position: relative;

  .text-box {
    /* background: red; */
  }

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
