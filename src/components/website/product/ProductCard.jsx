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
        <h3>{data?.title || "Lenovo ThinkPad X1 Carbon Gen 10"}</h3>
        <p>
          {data?.description ||
            "The Lenovo ThinkPad X1 Carbon Gen 10 is the ultimate business laptop, designed for professionals who need a reliable and high-performance machine. "}
        </p>
        <p className="price">{data?.price || "20,000/-"}</p>
      </div>
      <div className="button-wrapper">
        <button>Buy</button>
      </div>
    </StyledCard>
  );
};

export default ProductCard;
