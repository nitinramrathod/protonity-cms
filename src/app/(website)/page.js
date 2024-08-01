import { Heading, LinkButton, SubHeading, Wrapper } from "@/components/website/home/Home";
import Link from "next/link";

export default function Home() {

  return (
    <Wrapper>

      <div className="heading-wrapper">


      <SubHeading>Welcome to</SubHeading>
      <Heading>Multitech Computer Services</Heading>
      </div>
      <div className="button-wrapper">
        <LinkButton bordered href="/dashboard">Dashboard</LinkButton>
        <LinkButton href="/contact-us">Contact Us</LinkButton>
      </div>
    </Wrapper>
  );
}
