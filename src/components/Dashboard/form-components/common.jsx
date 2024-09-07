"use client";
import styled from "@emotion/styled";

const InputGroup = styled.div`
  padding:25px 15px;
  border: 1px solid #73a7e596;
  border-radius: 12px;
  background: #4e5557e6;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
  margin-top: 30px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  &.col-1{
    grid-template-columns: 1fr;
  }
`;

const GroupHeading = styled.h2`
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  color: white;
`;

export { InputGroup, Row, GroupHeading };
