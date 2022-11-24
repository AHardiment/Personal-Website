import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Head from "next/head";

export default function Home() {
  return (
    <div className="app-top-lvl h-screen">
      <Head>
        <title>Alex Hardiment</title>
      </Head>
      <Nav />
      <Hero />
      <Footer />
    </div>
  );
}
