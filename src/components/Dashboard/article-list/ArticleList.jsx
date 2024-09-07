import React from "react";
import { TableWrapper } from "../common/common.styled";
import ListPageHeader from "../ListPageHeader";
import Table from "@/components/Table/Table";
import { ActionTd } from "../Users/UserList";
import { delete_icon, edit_icon } from "@/components/assets/icons/dashboard";

const ArticleList = () => {
  const buttonProps = {
    href: "/dashboard/articles/add",
    title: "Add Article",
  };

  const stat = [
    { title: "Total Articles", count: 0 },
    { title: "Active Articles", count: 0 },
  ];

  const header = [
    { title: "Name" },
    { title: "Organization" },
    { title: "Mobile" },
    { title: "Email Id" },
    {
      title: "Address",
      width: "300px",
    },
    { title: "Pincode" },
    { title: "Message" },
    { title: "Action" },
  ];

  return (
    <TableWrapper>
      <ListPageHeader
        stat={stat}
        buttonProps={buttonProps}
        heading="Articles"
      />
      <Table header={header}>
        {Array.from({ length: 4 }).map((_, index) => (
          <tr key={index}>
            <td>{"--"}</td>
            <td>{"--"}</td>
            <td>{"--"}</td>
            <td>{"--"}</td>
            <td>{"--"}</td>
            <td>{"--"}</td>
            <td>{"--"}</td>
            <ActionTd>
              <div>
                <button className="edit">{edit_icon}</button>
                <button
                  className="delete"
                  //   onClick={() => handleDeleteEnquiry(item._id)}
                >
                  {delete_icon}
                </button>
              </div>
            </ActionTd>
          </tr>
        ))}
      </Table>
    </TableWrapper>
  );
};

export default ArticleList;
