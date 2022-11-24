import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import posts from "../../posts/posts.json";
import Head from "next/head";

export default function Home() {
  return (
    <div className="app-top-lvl">
      <Head>
        <title>Alex Hardiment</title>
      </Head>
      <Nav />
      <Footer />
    </div>
  );
}
