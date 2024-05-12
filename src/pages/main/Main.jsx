import { useRef } from "react";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import { Fotter } from "../auth/layout/Fotter";
import AboutUs from "./content/about us/AboutUs";
import Banner from "./content/banner/Banner";
import Evenement from "./content/evenement/Evenement";

const Main = () => {
  const scope = useRef();
  return (
    <div className="bg-zinc-950" ref={scope}>
      <Header />
      <Banner />
      <Evenement />
      <AboutUs />
      <Footer />
      <Fotter />
    </div>
  );
};

export default Main;
