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

      <div className="text-box">


        <div className="heading-wrapper">


          <SubHeading>Welcome to</SubHeading>
          <Heading>Multitech Computer Services</Heading>
        </div>
        <div className="button-wrapper">
          <LinkButton bordered href="/dashboard">Dashboard</LinkButton>
          <LinkButton href="/contact-us">Contact Us</LinkButton>
        </div>
      </div>
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-bedzg&psig=AOvVaw3bfCocGTzZNhC-SBuNexeU&ust=1722841717248000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOj6qtfj2ocDFQAAAAAdAAAAABAE" alt="texxt" srcset="" />
    </Wrapper>
  );
}
