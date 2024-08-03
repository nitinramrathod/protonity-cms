"use client";

import styled from "@emotion/styled";

export const MainWrapper = styled.div`
    height: 100vh;
    min-height: 500px;
  .sidebar-main-wrapper {
    display: flex;
    height: calc(100% - 50px);
  }

  .sidebar {
    width: 170px;
  }

  .main-content {
    padding: 10px;
    width: calc(100% - 170px);
    background: linear-gradient(170deg, #383f4c, #1b1b1b);
  }
`;
