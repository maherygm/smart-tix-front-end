import { Button, IconButton } from "@mui/material";
import { useState } from "react";

import gsap from "gsap";
import { IoClose } from "react-icons/io5";
import ModalMui from "../../../../components/ui/modal/ModalMui";
import CustomStepper from "./content/CustomStepper";
const AddEvenement = ({ open, handleClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  function SlideNext(parameters) {
    gsap.to(".container-slide-add-event", {
      x: -1270 * parameters,
      duration: 0.5,
      ease: "power1.inOut",
    });
  }
  function SlideBack(parameters) {
    gsap.to(".container-slide-add-event", {
      x: -1270 * parameters,
      duration: 0.5,
      ease: "power1.inOut",
    });
  }
  function handleClickNext(parameters) {
    if (0 <= parameters && parameters < 2) {
      setActiveStep(activeStep + 1);
      SlideNext(activeStep + 1);
    }
  }
  function handleClickBack(parameters) {
    if (0 < parameters && parameters <= 2) {
      setActiveStep(activeStep - 1);
      SlideBack(activeStep - 1);
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
            <div className="container-slide-add-event flex h-full w-max flex-row  bg-zinc-200">
              <div className="h-full w-[1270px]  bg-blue-400"></div>
              <div className="h-full w-[1270px] bg-pink-400"></div>
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
