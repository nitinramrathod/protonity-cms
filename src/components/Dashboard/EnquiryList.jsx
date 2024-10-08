"use client";

import React, { useEffect, useState } from "react";
import Table from "../Table/Table";
import { deleteEnquiry, deleteUser, fetchEnquiries } from "@/utils/services";
import ListPageHeader from "./ListPageHeader";
import styled from "@emotion/styled";
import { ActionTd } from "./Users/UserList";
import { delete_icon, edit_icon } from "../assets/icons/dashboard";
import { Loader } from "./common/TableLoader";
import { TableWrapper } from "./common/common.styled";

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

const EnquiryList = () => {
  const [enquiry, setEnquiry] = useState(null);
  const [states, setStats] = useState({
    loading: true,
    error: false,
  });

  // /api/enquiries/

  const handleDeleteEnquiry = (id) => {
    deleteEnquiry(id)
      .then((res) => {
        console.log("Success", res);
        getEnquiries();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const getEnquiries = () => {
    setStats((prev) => ({
      ...prev,
      loading: true,
    }));
    fetchEnquiries()
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

  useEffect(() => {
    getEnquiries();
  }, []);

  const buttonProps = {
    href: "/contact-us",
    title: "Add Enquiry",
  };

  const stat = [
    { title: "Total Enquiry", count: enquiry?.length || 0 },
    { title: "Resolved Enquiry", count: 0 },
  ];

  return (
    <TableWrapper>
      <ListPageHeader
        stat={stat}
        buttonProps={buttonProps}
        heading="Enquiry List"
      />
      <Table header={header}>
        {states.loading ? (
          <Loader row={10} column={header?.length} />
        ) : (
          enquiry?.length > 0 &&
          enquiry.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.name || "--"}</td>
                <td>{item?.organization || "--"}</td>
                <td>{item?.mobile || "--"}</td>
                <td>{item?.email_id || "--"}</td>
                <td>{item?.address || "--"}</td>
                <td>{item?.pincode || "--"}</td>
                <td>{item?.message || "--"}</td>
                <ActionTd>
                  <div>
                    <button className="edit">{edit_icon}</button>
                    <button
                      className="delete"
                      onClick={() => handleDeleteEnquiry(item._id)}
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
    </TableWrapper>
  );
};

export default EnquiryList;
