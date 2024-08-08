"use client";

import styled from "@emotion/styled";
import React from "react";
import Select from "./Select";

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  background: #f3f3f3;
  padding: 10px;
  border-radius: 10px;

  .select-filters-wrapper {
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
`;

const SelectFilters = ({
    filters
}) => {
  return (
    <Wrapper>
      <h3 className="search-heading">{filters?.title}</h3>
      <div className="select-filters-wrapper">
        {filters.selectInput.map((item, index)=>{
            return <Select key={index}>{item.label}</Select>  // assuming label is the value in the select input data
        })}
      </div>
    </Wrapper>
  );
};

export default SelectFilters;
