import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Head from "next/head";

export default function Home() {
  return (
    <div className="app-top-lvl">
      <Head>
        <title>Alex Hardiment</title>
      </Head>
      <Nav />
      <ContactForm />
      <Footer />
    </div>
  );
}
