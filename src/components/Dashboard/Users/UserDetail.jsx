"use client";
import styled from "@emotion/styled";
import React, { useState } from "react";

import { storeEnquiry, storeUser } from "@/utils/services";
import Textarea from "@/components/common/Textarea";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { useRouter } from 'next/navigation'


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
export const UserDetail = () => {
  const [form, setForm] = useState(null);
  const router = useRouter()
 
  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmitClick = ()=>{
    storeUser(form).then(res=>{
      console.log(res);
      router.push('/dashboard/uses')

    }).catch(err=>{
      console.log(err);
    })
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
          name="username"
          onChange={handleInputChange}
          label="Username"
          placeholder="Enter Username"
        />
      </div>
      <div className="input-row">
        <Input
          name="email_id"
          onChange={handleInputChange}
          label="Email ID"
          type="email"
          placeholder="Enter Email ID"
        />
        <Input
          name="password"
          onChange={handleInputChange}
          label="Password"
          type="text"
          placeholder="Enter Password"
        />
      </div>
      <Button onClick={handleSubmitClick}>Save</Button>
    </StyledForm>
  );
};
