import AllEvent from "./content/allevent/AllEvent";
import Details from "./content/details/Details";
import Header from "./content/header/Header";
import VIsite from "./content/maps/VIsite";
const Explore = () => (
  <div className="h-screen">
    <div className="absolute top-0">
      <VIsite />
    </div>
    <Header />
    <Details />
    <AllEvent />
  </div>
);
export default Explore;
