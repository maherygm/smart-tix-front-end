import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvent } from "../../configs/stateManagers/redux/action/evenement.action";

import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";

import { Fotter } from "../auth/layout/Fotter";
import AboutUs from "./content/about us/AboutUs";
import Banner from "./content/banner/Banner";
import Evenement from "./content/evenement/Evenement";
import IncomingEvent from "./content/incomingevent/IncomingEvent";
import LastEvent from "./content/lastevent/LastEvent";
import Types from "./content/types/Types";

const Main = () => {
  const scope = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    Aos.init();
    dispatch(getEvent());
  });

  const allEvent = useSelector((selector) => selector.eventReducers);

  return (
    <div className="bg-zinc-950" ref={scope}>
      <Header />
      <Banner />
      <Evenement data={allEvent} />
      <IncomingEvent data={allEvent} />
      <LastEvent data={allEvent} />
      <Types />
      <AboutUs />
      <Footer />
      <Fotter />
    </div>
  );
};

export default Main;
