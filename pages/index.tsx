import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className="app-top-lvl h-screen">
      <Nav />
      <Hero />
      <Footer />
    </div>
  );
}
