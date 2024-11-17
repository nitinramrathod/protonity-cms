"use client";

import Input from "@/components/common/Input";
import React, { useState } from "react";
import { GroupHeading, InputGroup, Row } from "../form-components/common";
import Textarea from "@/components/common/Textarea";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";

const AddExpense = () => {
  const router = useRouter();

  // Define state to store form values
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    duration: "",
    amount: "",
    start_date: "",
    end_date: "",
    description: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make API POST request
      const response = await fetch(
        "https://expense-api-jvlo.onrender.com/api/v1/expenses",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Send form data as JSON
        }
      );

      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Failed to create expense");
      }

      // If the request is successful, handle the response (e.g., show success message)
      const data = await response.json();

      router.push("/dashboard/expenses");

      console.log("Expense added successfully", data);
      // You can reset the form here or redirect the user if needed
      setFormData({
        name: "",
        mobile: "",
        duration: "",
        amount: "",
        start_date: "",
        end_date: "",
        description: "",
      });
    } catch (error) {
      console.error("Error:", error);
      // Handle the error (show an alert or message to the user)
    }
  };

  return (
    <InputGroup>
      <GroupHeading>Add Expense</GroupHeading>
      <form onSubmit={handleSubmit}>
        <Row>
          <Input
            name="name"
            label="Name"
            className="light-input"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            name="mobile"
            label="Mobile"
            className="light-input"
            value={formData.mobile}
            onChange={handleChange}
          />
          <Input
            name="duration"
            label="Duration"
            className="light-input"
            value={formData.duration}
            onChange={handleChange}
          />
          <Input
            name="amount"
            label="Amount"
            className="light-input"
            value={formData.amount}
            onChange={handleChange}
          />
          <Input
            name="start_date"
            type="date"
            label="Start Date"
            className="light-input"
            value={formData.start_date}
            onChange={handleChange}
          />
          <Input
            name="end_date"
            type="date"
            label="End Date"
            className="light-input"
            value={formData.end_date}
            onChange={handleChange}
          />
        </Row>
        <Row className="col-1">
          <Textarea
            onChange={handleChange}
            name="description"
            className="light-input"
            label="Description"
            rows="3"
          ></Textarea>
        </Row>

        <Row className="">
          <Button type="submit" className="light-input">
            Save
          </Button>
        </Row>
      </form>
    </InputGroup>
  );
};

export default AddExpense;
