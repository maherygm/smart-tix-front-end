// import "leaflet-control-geocoder/dist/Control.Geocoder.css";
// import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
// import LeafletRoutingMachine from "./LeafletRoutingMachine";

import markers from "../../../../assets/images/icons/png/marker-icon.png";

import { useState } from "react";

import img from "../../../../assets/images/480x320/img30.jpg";
import MyAllData from "../../../../utils/hotelsPosition.json";

const VIsite = () => {
  // //royal espace
  const position = [-21.43772, 47.09989];

  // //kmm talatamaty
  // const position2 = [-21.43691, 47.10459];

  // //stade apasambazaha
  // const pos = [-21.44902, 47.08804];

  // //
  // const hotelPietre = [-21.4403821, 47.0977219];

  const [clickedPosition, setClickedPosition] = useState(null);

  // const data = JSON.parse(MyAllData);
  return (
    <div className="z-0 h-screen w-full overflow-hidden pt-36">
      <MapContainer
        center={position}
        zoom={17}
        scrollWheelZoom={false}
        style={{ minHeight: "100vh", minWidth: "100vw", zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {MyAllData.map((el, index) => (
          <Marker
            icon={createCustomIcon(img)}
            key={index}
            position={[el.latitude, el.longitude]}
          >
            <Popup>
              <div>
                <p>h-screen w-full overflow-hidden pt-3</p>
              </div>
            </Popup>
          </Marker>
        ))}
        {/* <Marker position={position2} icon={createCustomIcon(img)}>
          <Popup>
            <div>
              <p>h-screen w-full overflow-hidden pt-3</p>
            </div>
          </Popup>
        </Marker> */}
        <ClickMarker setClickedPosition={setClickedPosition} />

        {clickedPosition && (
          <Marker
            position={clickedPosition}
            icon={L.icon({
              iconUrl: markers,
              iconAnchor: [20, 40],
            })}
          ></Marker>
        )}

        {/* <LeafletRoutingMachine /> */}
      </MapContainer>
    </div>
  );
};

export default VIsite;

const ClickMarker = ({ setClickedPosition }) => {
  useMapEvents({
    click: (e) => {
      setClickedPosition(e.latlng);
    },
  });

  return null;
};

// let DefaultIcon = L.icon({
//   iconUrl: "/marker-icon.png",
//   iconSize: [25, 41],
//   iconAnchor: [10, 41],
//   popupAnchor: [2, -40],
// });
// L.Marker.prototype.options.icon = DefaultIcon;

const createCustomIcon = (iconUrl) => {
  return L.divIcon({
    html: `
      <div class="relative w-10 h-10 bg-white rounded-full border-2 border-black flex items-center justify-center overflow-hidden">
        <img src="${iconUrl}" style="width: 100%; height: 100%;" alt="icon"/>
      </div>
    `,
    className: "", // Pour éviter les styles par défaut de Leaflet
    iconSize: [40, 40], // Taille du conteneur div
    iconAnchor: [25, -10], // Point de l'icône qui correspond à l'emplacement sur la carte
  });
};
