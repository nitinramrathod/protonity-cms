"use client";

import React, { useEffect, useState } from "react";
import Table from "../Table/Table";
import { fetchEnquiries } from "@/utils/services";

const EnquiryList = () => {
  const [enquiry, setEnquiry] = useState(null);

  useEffect(() => {
    fetchEnquiries()
      .then((res) => {
        setEnquiry(res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  console.log("enquiry", enquiry);

  return (
    <Table>
      {enquiry?.length > 0 &&
        enquiry.map((item) => {
          return (
            <tr key={item._id}>
              <td>{item.name || "--"}</td>
              <td>{item?.organization || "--"}</td>
              <td>{item.mobile || "--"}</td>
              <td>{item.email_id || "--"}</td>
              <td>{item.address || "--"}</td>
              <td>{item.pincode || "--"}</td>
              <td>{item.message || "--"}</td>
            </tr>
          );
        })}
    </Table>
  );
};

export default EnquiryList;
