"use client";
import styled from "@emotion/styled";
import React, { useState } from "react";
import Input from "../common/Input";
import Textarea from "../common/Textarea";
import Button from "../common/Button";
import { storeEnquiry } from "@/utils/services";

const StyledForm = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  .input-row {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    & > div {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    .input-row {
      flex-direction: row;
      gap: 25px;
    }
  }
`;
export const Form = () => {
  const [form, setForm] = useState(null);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmitClick = ()=>{
    console.log('form==>', form)
    storeEnquiry(form)
  }

  return (
    <StyledForm>
      <div className="input-row">
        <Input
          label="Name"
          name="name"
          onChange={handleInputChange}
          placeholder="Enter Name"
        />
        <Input
          name="organization"
          onChange={handleInputChange}
          label="Organization Name"
          placeholder="Enter Organization Name"
        />
      </div>
      <div className="input-row">
        <Input
          name="mobile"
          onChange={handleInputChange}
          label="Mobile"
          type="tel"
          placeholder="Enter Mobile"
        />
        <Input
          name="email_id"
          onChange={handleInputChange}
          label="Email Id"
          type="email"
          placeholder="Enter Email"
        />
      </div>
      <div className="input-row">
        <Textarea
          name="address"
          onChange={handleInputChange}
          label="Address"
          placeholder="Enter Message"
        />
        <Input
          name="pincode"
          onChange={handleInputChange}
          label="Pincode"
          type="number"
          placeholder="Enter Pincode"
        />
      </div>
      <Textarea
        name="message"
        onChange={handleInputChange}
        label="Message"
        placeholder="Enter Message"
      />
      <Button onClick={handleSubmitClick}>Submit</Button>
    </StyledForm>
  );
};
