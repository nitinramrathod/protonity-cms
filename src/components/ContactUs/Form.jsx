"use client";
import styled from "@emotion/styled";
import React, { useState } from "react";
import Input from "../common/Input";
import Textarea from "../common/Textarea";
import Button from "../common/Button";
import { storeEnquiry } from "@/utils/services";
import { useRouter } from "next/navigation";

const StyledForm = styled.form`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  .button-wrapper{
    display: flex;
    padding-top: 30px;
    button{
      padding: 10px 40px;
    }
  }

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
  const router = useRouter();

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    storeEnquiry(form)
      .then((res) => {
        console.log("res", res);
        setForm("");
        e.target.reset();
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <StyledForm onSubmit={handleSubmitClick}>
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

        <Input
          name="pincode"
          onChange={handleInputChange}
          label="Pincode"
          type="number"
          placeholder="Enter Pincode"
        />
      
      </div>
      <div className="input-row">

      <Textarea
          name="address"
          onChange={handleInputChange}
          label="Address"
          placeholder="Enter Full Address"
        />
      <Textarea
        name="message"
        onChange={handleInputChange}
        label="Message"
        placeholder="Enter Your Query"
        />
        </div>

        <div className="button-wrapper">

      <Button>Submit</Button>
        </div>
    </StyledForm>
  );
};
