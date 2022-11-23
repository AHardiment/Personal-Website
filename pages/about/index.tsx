import AboutDetails from "../../components/AboutDetails";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Nav from "../../components/Nav";
import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <div className="app-top-lvl">
      <Nav />
      <AboutDetails />
      <Footer />
    </div>
  );
}
