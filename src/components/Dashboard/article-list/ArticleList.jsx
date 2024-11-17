import React from "react";
import { TableWrapper } from "../common/common.styled";
import ListPageHeader from "../ListPageHeader";
import Table from "@/components/Table/Table";
import { ActionTd } from "../Users/UserList";
import { delete_icon, edit_icon } from "@/components/assets/icons/dashboard";

let default_header = [
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
const default_button_props = {
  href: "/dashboard/articles/add",
  title: "Add Article",
};

const default_stat = [
  { title: "Total Articles", count: 0 },
  { title: "Active Articles", count: 0 },
];

const ArticleList = ({
  header = default_header,
  button_props = default_button_props,
  stat = default_stat,
  table_heading="Articles",
  children,
}) => {
  return (
    <TableWrapper>
      <ListPageHeader
        stat={stat}
        buttonProps={button_props}
        heading={table_heading}
      />
      <Table header={header}>{children}</Table>
    </TableWrapper>
  );
};

export default ArticleList;
