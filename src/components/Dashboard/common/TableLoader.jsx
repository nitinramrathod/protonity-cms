"use client"

import styled from "@emotion/styled";


const TableLoader = styled.tr`
  @keyframes loading {
    0% {
      background-color: #7e7e7e;
    }
    50% {
      background-color: #ecebeb;
    }
    100% {
      background-color: #7e7e7e;
    }
  }

  td {
    padding: 20px;
  }

  &:nth-child(odd) {
    td {
      animation: loading 1s infinite;
    }
  }
`;

export const Loader = ({ row = 10, column = 6 }) => {
    return Array.from({ length: row }).map((row) => {
      return (
        <TableLoader key={row}>
          {Array.from({ length: column }).map((_, colIndex) => (
            <td key={colIndex}></td>
          ))}
        </TableLoader>
      );
    });
  };