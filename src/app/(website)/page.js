import { auth } from "@/auth";
import { Heading, LinkButton, SubHeading, Wrapper } from "@/components/website/home/Home";
export default async function Home() {

  const session = await auth();

  // if(session?.user){
  //   redirect('/dashboard')
  // }

  console.log('session==>', session)

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
