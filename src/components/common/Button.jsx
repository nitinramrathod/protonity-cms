"use client";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

const loadingStyles = css`
  width: 30px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 4px solid #514b82;
  animation: l20-1 0.8s infinite linear alternate, l20-2 1.6s infinite linear;

  @keyframes l20-1 {
    0% {
      clip-path: polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%);
    }
    12.5% {
      clip-path: polygon(
        50% 50%,
        0 0,
        50% 0%,
        100% 0%,
        100% 0%,
        100% 0%,
        100% 0%
      );
    }
    25% {
      clip-path: polygon(
        50% 50%,
        0 0,
        50% 0%,
        100% 0%,
        100% 100%,
        100% 100%,
        100% 100%
      );
    }
    50% {
      clip-path: polygon(
        50% 50%,
        0 0,
        50% 0%,
        100% 0%,
        100% 100%,
        50% 100%,
        0% 100%
      );
    }
    62.5% {
      clip-path: polygon(
        50% 50%,
        100% 0,
        100% 0%,
        100% 0%,
        100% 100%,
        50% 100%,
        0% 100%
      );
    }
    75% {
      clip-path: polygon(
        50% 50%,
        100% 100%,
        100% 100%,
        100% 100%,
        100% 100%,
        50% 100%,
        0% 100%
      );
    }
    100% {
      clip-path: polygon(
        50% 50%,
        50% 100%,
        50% 100%,
        50% 100%,
        50% 100%,
        50% 100%,
        0% 100%
      );
    }
  }
  @keyframes l20-2 {
    0% {
      transform: scaleY(1) rotate(0deg);
    }
    49.99% {
      transform: scaleY(1) rotate(135deg);
    }
    50% {
      transform: scaleY(-1) rotate(0deg);
    }
    100% {
      transform: scaleY(-1) rotate(-135deg);
    }
  }
`;

const buttonStyles = css`
  outline: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  padding: 10px 15px;
  border-radius: 7px;
  transition: all 0.3s ease;
  border: 2px solid #2a8bee;
  color: #ffffff;
  background: #2a8bee;
  width: ${({ width }) => width || "fit-content"};
  display: flex;
  justify-content: center;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
  &:hover,
  &:focus {
    box-shadow: 0 0 0 3px #514b8258;
    background: #165ea5;
    color: white;
    border-color: #514b82;
    .loader {
      border-color: white;
    }
  }
`;

const StyledButton = styled.button`
  ${buttonStyles}
`;

const Loader = styled.div`
  ${loadingStyles}
`;

const Button = ({
  disabled,
  children = "Children",
  onClick = null,
  width,
  loading,
  titleText = "Kindly click the button!",
  DisabledTitleText = "Button is disabled now!",
}) => {
  const title = disabled ? DisabledTitleText : titleText;
  return (
    <StyledButton
      className="loader"
      title={title}
      width={width}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? <Loader className="loader" /> : children}
    </StyledButton>
  );
};

export default Button;
