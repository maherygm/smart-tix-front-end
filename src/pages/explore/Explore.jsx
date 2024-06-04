import { useState } from "react";
import { useSelector } from "react-redux";
import AllEvent from "./content/allevent/AllEvent";
import Details from "./content/details/Details";
import Header from "./content/header/Header";
import VIsite from "./content/maps/VIsite";
const Explore = () => {
  
  const allData = useSelector((state) => state.eventReducers);

  const [dataDetails, setDataDetails] = useState(allData[0]);
  const [search, setSearch] = useState("");

  const [defaultLocation, setDefaultLocation] = useState([-21.43772, 47.09989]);

  function searchFuction() {

  }

  function selectLocation(data) {
    setDefaultLocation([data.latitude, data.longitude]);
    setDataDetails(data);
  }
  

  return (
    <div className="h-screen">
      <div className="absolute top-0">
        <VIsite defaultLocation={defaultLocation} location={location} data={allData} />
      </div>
      <Header searchFuction={searchFuction} data={allData} />
      <Details data={dataDetails} />
      <AllEvent data={allData} selectLocation={selectLocation} />

    </div>

  )
};
export default Explore;
