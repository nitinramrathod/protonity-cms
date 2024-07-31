import Link from "next/link";

export default function Home() {

  return (
    <div>

      <h2>Welcome to</h2>
      <h1>Multitech Computer Services</h1>
      <div className="button-wrapper">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/contact-us">Contact Us</Link>
      </div>
    </div>
  );
}
