import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

export default function Home() {
  return (
    <div className="app-top-lvl">
      <Nav />
      <ContactForm />
      <Footer />
    </div>
  );
}
