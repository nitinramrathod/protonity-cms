"use client";

import React, { useState } from "react";
import { Wrapper } from "./StyledComponents";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { login } from "@/utils/services";

const Form = ({session}) => {
  const [info, setInfo] = useState(null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo(prev=>({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(info)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };



  return (
    <Wrapper onSubmit={handleSubmit}>
      <Input
        label="Email Id"
        name="email_id"
        onChange={handleInputChange}
        placeholder="Enter Email Id"
      />
      <Input
        label="Password"
        name="password"
        onChange={handleInputChange}
        type="password"
        placeholder="Enter Password"
      />
      <Button>Login</Button>
    </Wrapper>
  );
};

export default Form;
