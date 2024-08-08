import React from "react";
import { StyledCard } from "../home/Home";
import laptop from "../../../../public/images/product-image/laptop.jpg";
import Image from "next/image";

const ProductCard = ({ data }) => {
  return (
    <StyledCard>
      <div className="image-wrapper">
        <Image className="product-image" src={laptop} alt={"laptop"}></Image>
      </div>
      <div className="detail-wrapper">
        <h3>{data?.title || "--"}</h3>
        <p className="description">{data?.description || "--"}</p>
        <p className="price">{data?.price || "--"}</p>
      </div>
      <div className="button-wrapper">
        <button>Buy</button>
      </div>
    </StyledCard>
  );
};

export default ProductCard;
