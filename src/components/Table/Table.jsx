"use client";

import styled from "@emotion/styled";
import React from "react";

const StyledTable = styled.table`
  background: red;
  width: 100%;
  border-collapse: collapse;
`;

const Thead = styled.thead``;

const Th = styled.th`
  padding: 10px;
  text-align: left;
  background: #5988af;
  color: white;
  font-size: 14px;
  font-weight: 700;
  min-width: ${({width})=> width || "140px"};
`;

const Tbody = styled.tbody`
  tr:nth-child(odd) td {
    background: #dddddd;
  }

  td {
    padding: 10px;
    text-align: left;
    background: #cbced2;
    color: #303030;
    font-size: 14px;
    font-weight: 500;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  overflow: auto;
  border-radius: 5px;
`;

const Table = ({ children, header }) => {
  return (
    <Wrapper>
      <StyledTable>
        <Thead>
          <tr>
            {header?.length > 0 &&
              header.map((item) => <Th width={item?.width} key={item.title}>{item.title}</Th>)}
          </tr>
        </Thead>
        <Tbody>{children}</Tbody>
      </StyledTable>
    </Wrapper>
  );
};

export default Table;
