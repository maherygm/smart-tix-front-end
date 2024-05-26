import { Button, IconButton, TextField } from "@mui/material";
import gsap from "gsap";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { FcImageFile } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import { NavLink } from "react-router-dom";
import ModalMui from "../../../../components/ui/modal/ModalMui";
import CustomStepper from "./content/CustomStepper";

import MyAllData from "../../../../utils/hotelsPosition.json";

import img from "../../../../assets/images/480x320/img28.jpg";
const AddEvenement = ({ open, handleClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [image, setImage] = useState(null);
  const position = [-21.43772, 47.09989];
  const [clickedPosition, setClickedPosition] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState({
    name: "Aucun",
    address: "Aucun",
    latitude: "",
    longitude: "",
  });

  //cleanUp state
  useEffect(() => {
    setActiveStep(0);
  }, [open]);

  function Slide(parameters) {
    gsap.to(".container-slide-add-event", {
      x: -1270 * parameters,
      duration: 0.5,
      ease: "power1.inOut",
    });
  }

  function handleClickNext(parameters) {
    if (0 <= parameters && parameters < 2) {
      setActiveStep(activeStep + 1);
      Slide(activeStep + 1);
    }
  }
  function handleClickBack(parameters) {
    if (0 < parameters && parameters <= 2) {
      setActiveStep(activeStep - 1);
      Slide(activeStep - 1);
    }
  }
  function handleDragOver(event) {
    event.preventDefault();
  }
  function handleDrop(event) {
    event.preventDefault();

    const files = event.dataTransfer.files;
    console.log(event.dataTransfer.files);

    if (files.length > 0) {
      // Accéder au premier fichier (index 0)
      const file = files[0];

      // Vérifier si le fichier est une image
      if (file.type.startsWith("image/")) {
        // Créer un objet URL pour afficher l'image
        const imageUrl = URL.createObjectURL(file);
        setImage(file);
        // Afficher l'URL de l'image dans la console
        console.log("URL de l'image:", imageUrl);
      } else {
        console.log("Le fichier déposé n'est pas une image.");
      }
    } else {
      console.log("Aucun fichier déposé.");
    }
  }
  return (
    <div>
      <ModalMui open={open} handleClose={handleClose}>
        <div className="absolute  left-1/2 top-1/2 flex size-2/3 -translate-x-1/2 -translate-y-1/2 flex-col  rounded-md bg-white px-1 ">
          <div className="h-1/4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl">Ajouter un nouveau Evenement</h1>
              <IconButton onClick={handleClose} className=" text-zinc-800">
                <IoClose />
              </IconButton>
            </div>
            <div>
              <CustomStepper activeStep={activeStep} />
            </div>
          </div>
          <div className="h-3/4  w-full  overflow-x-hidden">
            <div className="container-slide-add-event flex h-full w-max flex-row ">
              <div className="h-fit w-[1270px] px-10">
                <h1 className="p-7 text-center text-3xl">
                  Information Concernant l'evenement
                </h1>
                <div className="flex h-full gap-3">
                  <div className="flex h-80 w-1/2 items-center justify-center border border-dashed  border-zinc-600">
                    <div
                      className="flex flex-col items-center justify-center overflow-hidden"
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                    >
                      {!image ? (
                        <>
                          <p>Glisser et deposer votre Affiche ici</p>
                          <FcImageFile className="text-6xl" />
                        </>
                      ) : (
                        <img
                          className="h-full w-44 overflow-hidden"
                          src={URL.createObjectURL(image)}
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex w-1/2 flex-col gap-3 p-7">
                    <TextField label="Titre evenement" fullWidth />
                    <label>Date</label>
                    <TextField type="datetime-local" />
                    <TextField label="Description evenement" />
                  </div>
                </div>
              </div>
              <div className="relative h-full w-[1270px] ">
                <h1 className=" p-7 text-center text-3xl">
                  Choisisser un Lieux
                </h1>
                <div className="flex h-72 gap-3  overflow-hidden">
                  <MapContainer
                    center={position}
                    zoom={16}
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
                            <p>{el.name}</p>
                            <p>{el.address}</p>
                            <div className="flex justify-end">
                              <NavLink to={"/panorama"}>
                                <div className="w-fit  rounded-lg px-4  py-1 text-right transition-colors duration-200 hover:bg-blue-50">
                                  Visite
                                </div>
                              </NavLink>
                              <button
                                onClick={() => {
                                  setSelectedLocation({
                                    name: el.name,
                                    address: el.address,
                                    longitude: el.longitude,
                                    latitude: el.latitude,
                                  });
                                }}
                                className="w-fit  rounded-lg px-4  py-1 text-right transition-colors duration-200 hover:bg-blue-50"
                              >
                                Selectionner
                              </button>
                            </div>
                          </div>
                        </Popup>
                      </Marker>
                    ))}

                    <ClickMarker setClickedPosition={setClickedPosition} />
                  </MapContainer>
                </div>
                <div className="absolute  bottom-9  z-20   w-56 rounded-lg bg-white p-2">
                  <h1 className="text-2xl text-zinc-900">Lieu Selectionner</h1>
                  <p className="text-zinc-600">{selectedLocation.name}</p>
                  <p className="text-zinc-600">{selectedLocation.address}</p>
                </div>
              </div>
              <div className="h-full w-[1270px]  bg-green-400"></div>
            </div>
          </div>
          <div className="flex items-end justify-end gap-5 py-2">
            <Button onClick={() => handleClickBack(activeStep)}>back</Button>
            <Button onClick={() => handleClickNext(activeStep)}>next</Button>
          </div>
        </div>
      </ModalMui>
    </div>
  );
};
export default AddEvenement;

const ClickMarker = ({ setClickedPosition }) => {
  useMapEvents({
    click: (e) => {
      setClickedPosition(e.latlng);
    },
  });

  return null;
};

const createCustomIcon = (iconUrl) => {
  return L.divIcon({
    html: `
      <div class="relative w-10 h-10 bg-white rounded-full border-2 border-black flex items-center justify-center overflow-hidden">
        <img src="${iconUrl}" style="width: 100%; height: 100%;" alt="icon"/>
      </div>
    `,
    className: "",
    iconSize: [40, 40],
    iconAnchor: [25, -10],
  });
};
