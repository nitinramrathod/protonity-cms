import React from 'react'
import { StyledCard } from '../home/Home'
import laptop from "../../../../public/images/product-image/laptop.jpg"
import Image from 'next/image'

const ProductCard = ({data}) => {
  return (
    <StyledCard>
        <div className="image-wrapper">
            <Image className='product-image' src={laptop} alt={'laptop'}></Image>

        </div>
        <div className="detail-wrapper">
            <h3>{data?.title || "Lenovo" }</h3>
            <p>{data?.description || "Photographers and video editors on the go need a powerful laptop with good"}</p>
            <p className='price'>{data?.price || "20,000/-"}</p>
        </div>
        <div className="button-wrapper">
            <button>Buy</button>
            <button>Add to Cart</button>
        </div>

    </StyledCard>
  )
}

export default ProductCard