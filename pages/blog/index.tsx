import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import posts from "../../posts/posts.json";

export default function Home() {
  return (
    <div className="app-top-lvl">
      <Nav />
      <Footer />
    </div>
  );
}
