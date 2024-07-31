"use client";

import styled from "@emotion/styled";
import React from "react";

const StyledTable = styled.table`
background: red;
width: 100%;
border-collapse: collapse;

`;

const Thead = styled.thead`

th{
    padding: 10px;
    text-align: left;
    background: #5988af;
    color: white;
    font-size: 14px;
    font-weight: 700;
}

`
const Tbody = styled.tbody`

tr:nth-child(odd) td {
    background: #dddddd;
}

td{
    padding: 10px;
    text-align: left;
    background: #cbced2;
    color: #303030;
    font-size: 14px;
    font-weight: 500;
}

`

const Table = ({ children, header}) => {
  return (
    <StyledTable>
      <Thead>
        <tr>
          <th>Name</th>
          <th>Organization</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>Address</th>
          <th>Pincode</th>
          <th>Message</th>
        </tr>
      </Thead>
      <Tbody>
        <tr>
          <td>001</td>
          <td>001</td>
          <td>001</td>
          <td>001</td>
          <td>001</td>
          <td>001</td>
          <td>001</td>
        </tr>
        <tr>
          <td>001</td>
          <td>001</td>
          <td>001</td>
          <td>001</td>
          <td>001</td>
          <td>001</td>
          <td>001</td>
        </tr>
      </Tbody>
    </StyledTable>
  );
};

export default Table;
