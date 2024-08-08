"use client";
import { search_icon } from "@/components/assets/icons/dashboard";
import styled from "@emotion/styled";
import React from "react";
import SelectFilters from "./SelectFilters";

const Wrapper = styled.div`
  padding: 10px;
  background: white;
  border-radius: 10px;
  position: sticky;
  left: 0;
  height: 80vh;
  max-height: 800px;
  top: 70px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;

  .input-wrapper {
    display: flex;
    gap: 10px;
  }

  input.search-input {
    padding: 10px 15px;
    width: 100%;
    border-radius: 5px;
    border: none;
    background: #dcdcdc;
    outline: none;
  }

  .search-button{
    border: none;
    border-radius: 50%;
    height: 35px;
    aspect-ratio: 1;
    svg{
      fill: #127ae2;
      width: 20px;
    }
  }

  .filter-button-wrapper {
    padding-top: 30px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: flex-start;

    button {
      padding: 5px 10px;
    }
  }
`;

const ratingFilter = {
  title: "Rating",
  selectInput:[
    { value: "4", label: "4★ & above" },
    { value: "3", label: "3★ & above" },
    { value: "2", label: "2★ & above" },
    { value: "1", label: "1★ & above" }
  ]
}
const priceFilter = {
  title: "Price",
  selectInput:[
    { value: "4", label: "0 to 5000/-" },
    { value: "3", label: "5000/- to 10,000/-" },
    { value: "2", label: "10,000/- to 20,000/-" },
    { value: "1", label: "20,000/- & above" }
  ]
}

const FilterBar = () => {
  return (
    <Wrapper>
      <h2>Filter Bar</h2>
      <div className="input-wrapper">
        <input className="search-input" type="text" placeholder="Search..." />
        <button className="search-button">{search_icon}</button>
      </div>

      <SelectFilters filters={ratingFilter}/>
      <SelectFilters filters={priceFilter}/>
      <div className="filter-button-wrapper">
        <button>Reset</button>
      </div>
    </Wrapper>
  );
};

export default FilterBar;
