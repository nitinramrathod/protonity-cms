"use client";
import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  padding: 10px;
  background: white;
  border-radius: 10px;
  position: sticky;
  left: 0;
  height: 70vh;
  max-height: 700px;
  top: 70px;

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

const FilterBar = () => {
  return (
    <Wrapper>
      <h2>Filter Bar</h2>
      <div className="input-wrapper">
        <input className="search-input" type="text" placeholder="Search..." />
        <button>Filter</button>
      </div>
      <div className="filter-button-wrapper">
        <button>Reset</button>
        <button>Sort by Price</button>
        <button>Sort by Rating</button>
        <button>Sort by Popularity</button>
      </div>
    </Wrapper>
  );
};

export default FilterBar;
