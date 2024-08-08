import { auth } from "@/auth";
import { Heading, LinkButton, ProductWrapper, SubHeading, Wrapper } from "@/components/website/home/Home";
import FilterBar from "@/components/website/product/FilterBar";
import ProductCard from "@/components/website/product/ProductCard";
export default async function Home() {

  const session = await auth();

  return (
    <Wrapper>
      <ProductWrapper>
      <FilterBar></FilterBar>
      <div className="product-container">

        {Array.from({ length: 12 }).map((item, i) => <ProductCard key={i}></ProductCard>)}
      </div>

      </ProductWrapper>
    </Wrapper>
  );
}
