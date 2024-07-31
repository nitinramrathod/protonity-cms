"use client";

import React, { useEffect, useState } from "react";
import Table from "../Table/Table";
import {fetchUsers } from "@/utils/services";


const header = [
    {title: "Name"},
    {title: "Username"},
    {title: "Email Id"},
    {title: "Password"},
    {title: "Status"},
    {title: "Action"},
]

const UserList = () => {
  const [enquiry, setEnquiry] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then((res) => {
        setEnquiry(res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <Table header={header}>
      {enquiry?.length > 0 &&
        enquiry.map((item) => {
          return (
            <tr key={item._id}>
              <td>{item?.name || "--"}</td>
              <td>{item?.username || "--"}</td>
              <td>{item?.email_id || "--"}</td>
              <td>{item.password || "--"}</td>
              <td>{item.status || "--"}</td>
              <td>...</td>
            </tr>
          );
        })}
    </Table>
  );
};

export default UserList;
