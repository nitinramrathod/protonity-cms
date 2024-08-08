import { auth } from "@/auth";
import { Heading, LinkButton, ProductWrapper, SubHeading, Wrapper } from "@/components/website/home/Home";
import FilterBar from "@/components/website/filter/FilterBar";
import ProductCard from "@/components/website/product/ProductCard";
export default async function Home() {

  const session = await auth();

  const laptops = [
    {
      title: "HP Envy x360 2-in-1",
      description: "The HP Envy x360 2-in-1 is equipped with an AMD Ryzen 7 7730U, 16GB RAM, and a 1TB SSD. It features a 15.6-inch 1080p OLED touch display, offering solid performance and vibrant visuals. It is praised for its clicky keyboard and clear webcam.",
      price: "$799",
      source: "https://www.laptopmag.com"
    },
    {
      title: "HP Dragonfly Pro",
      description: "This business laptop features an AMD Ryzen 7 7736U, AMD Radeon Graphics, 16GB - 32GB RAM, and 512GB - 1TB storage. It has a 14-inch Full HD touchscreen and offers excellent performance and battery life, though it may have overheating and battery issues.",
      price: "Starts at $1,149.99",
      source: "https://www.techradar.com"
    },
    {
      title: "HP Pavilion 15t-eg300",
      description: "The Pavilion 15t-eg300 comes with an Intel Core i7-1355U, 16GB RAM, and 256GB SSD. It features a 15.6-inch FHD display and is known for its micro-edge screen and Audio by B&O.",
      price: "$479.99",
      source: "https://www.hp.com"
    },
    {
      title: "Dell XPS 13 Plus",
      description: "The Dell XPS 13 Plus offers an Intel Core i7-1260P, 16GB RAM, and 512GB SSD. It has a 13.4-inch UHD+ display, providing exceptional clarity and performance in a compact form.",
      price: "$1,299.99",
      source: "https://www.dell.com"
    },
    {
      title: "Dell Inspiron 15 3000",
      description: "This budget-friendly laptop features an Intel Core i5-1135G7, 8GB RAM, and 256GB SSD. It has a 15.6-inch FHD display and is ideal for everyday tasks.",
      price: "$549.99",
      source: "https://www.dell.com"
    },
    {
      title: "Lenovo ThinkPad X1 Carbon Gen 11",
      description: "The ThinkPad X1 Carbon Gen 11 is equipped with an Intel Core i7-1365U, 16GB RAM, and 512GB SSD. It features a 14-inch 4K display and is known for its durability and performance.",
      price: "$1,599.99",
      source: "https://www.lenovo.com"
    },
    {
      title: "Lenovo Yoga 7i",
      description: "This versatile 2-in-1 laptop has an Intel Core i5-1240P, 12GB RAM, and 512GB SSD. It offers a 14-inch FHD touch display and is praised for its flexibility and long battery life.",
      price: "$899.99",
      source: "https://www.lenovo.com"
    }
  ];

  return (
    <Wrapper>
      <ProductWrapper>
        <FilterBar />
        <div className="product-container">

          {laptops?.map((item, i) => <ProductCard data={item} key={i}></ProductCard>)}
        </div>

      </ProductWrapper>
    </Wrapper>
  );
}
