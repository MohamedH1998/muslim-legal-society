import type { NextPage } from "next";
import Cta from "../components/cta.tsx";
import Footer from "../components/footer";
import Hero from "../components/hero";
import ImageGrid from "../components/image-grid";
import Nav from "../components/nav";
import TextSection from "../components/text-section";

const Home: NextPage = () => {
  return (
    <div className="">
      <Nav />
      <div className="font-primary bg-silk-pillow space-y-5">
        <Hero />
        <TextSection />
        <Cta />
        <ImageGrid />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
