"use client";

import React, { useEffect, useState } from "react";
import Table from "../../Table/Table";
import { deleteUser, fetchUsers, updateStatus } from "@/utils/services";
import styled from "@emotion/styled";
import ListPageHeader from "../ListPageHeader";
import { Loader, MainWrapper } from "../EnquiryList";
import { delete_icon, edit_icon } from "@/components/assets/icons/dashboard";
import Status from "@/components/common/Status";
import ToggleButton from "@/components/common/ToggleButton";

const header = [
  { title: "Name" },
  { title: "Username" },
  { title: "Email Id" },
  { title: "Password" },
  { title: "Status" },
  { title: "Action" },
];

// Styled Components Start
export const ActionTd = styled.td`
  div {
    display: flex;
    gap: 10px;
    align-items: center;

    button.delete,
    button.edit {
      background: transparent;
      border: none;
      cursor: pointer;
      svg {
        fill: #f85858;
      }
    }
    button.edit {
      svg {
        fill: #4d4dd8;
      }
    }
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
  const handleStatusChange = (id, current_status) => {
    console.log("hello");

    const status = current_status ? false : true;

    updateStatus(id, status)
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
                <td>
                  <Status status={item?.status} />
                </td>
                <ActionTd>
                  <div>
                    <ToggleButton
                      onChange={() =>
                        handleStatusChange(item?._id, item?.status)
                      }
                      checked={item?.status}
                      name="status"
                      id={item._id}
                    ></ToggleButton>
                    <button className="edit">{edit_icon}</button>
                    <button
                      onClick={() => handleDeleteUser(item._id)}
                      className="delete"
                    >
                      {delete_icon}
                    </button>
                  </div>
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
