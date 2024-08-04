import styled from "@emotion/styled";
import React from "react";

const StyledStatus = styled.div`
  padding: 5px 10px;
  border-radius: 5px;
  background: ${({ status }) => (status ? "#01a429bd" : "#ff3737e8")};
  width: fit-content;
  color: white;
  font-size: 12px;
`;

const Status = ({ status }) => {
  return (
    <StyledStatus status={status}>
      {status ? "Active" : "Inactive"}
    </StyledStatus>
  );
};

export default Status;
