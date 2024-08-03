"use client";

import React, { useEffect, useState } from "react";
import Table from "../../Table/Table";
import { deleteUser, fetchUsers } from "@/utils/services";
import styled from "@emotion/styled";
import ListPageHeader from "../ListPageHeader";
import { Loader, MainWrapper } from "../EnquiryList";

const header = [
  { title: "Name" },
  { title: "Username" },
  { title: "Email Id" },
  { title: "Password" },
  { title: "Status" },
  { title: "Action" },
];

// Styled Components Start
const ActionTd = styled.td`
  display: flex;
  gap: 10px;

  button.delete {
    background: transparent;
    border: none;
    color: #f85858;
  }
  button.edit {
    background: transparent;
    color: #4d4dd8;
  }
`;
// Styled Components End

const UserList = () => {
  const [enquiry, setEnquiry] = useState(null);
  const [states, setStats] = useState({
    loading: true,
    error: false,
  });

  const getUserList = () => {
    setStats((prev) => ({
      ...prev,
      loading: true,
    }));
    fetchUsers()
      .then((res) => {
        setEnquiry(res);
        setStats((prev) => ({
          ...prev,
          loading: false,
          error: false,
        }));
      })
      .catch((error) => {
        setStats((prev) => ({
          ...prev,
          loading: false,
          error: true,
        }));
        console.log("error", error);
      });
  };

  const handleDeleteUser = (id) => {
    deleteUser(id)
      .then((res) => {
        console.log("Success", res);
        getUserList();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getUserList();
  }, []);

  const buttonProps = {
    href: "/dashboard/users/add",
    title: "Add User",
  };

  const stat = [
    { title: "Total Users", count: enquiry?.length || 0 },
    { title: "Active Users", count: 0 },
  ];

  return (
    <MainWrapper>
      <ListPageHeader
        stat={stat}
        buttonProps={buttonProps}
        heading="Users List"
      />
      <Table header={header}>
        {states.loading ? (
          <Loader row={10} column={header?.length} />
        ) : (
          enquiry?.length > 0 &&
          enquiry.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item?.name || "--"}</td>
                <td>{item?.username || "--"}</td>
                <td>{item?.email_id || "--"}</td>
                <td>{item?.password || "--"}</td>
                <td>{item?.status ? "Active" : "Inactive"}</td>
                <ActionTd>
                  <button
                    onClick={() => handleDeleteUser(item._id)}
                    className="delete"
                  >
                    Delete
                  </button>
                  <button className="edit">Edit</button>
                </ActionTd>
              </tr>
            );
          })
        )}
      </Table>
    </MainWrapper>
  );
};

export default UserList;
