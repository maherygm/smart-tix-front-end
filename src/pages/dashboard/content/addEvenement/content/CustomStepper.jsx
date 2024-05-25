import React from "react";
import { Step, Stepper } from "react-form-stepper";
import { FaMapLocationDot, FaWpforms } from "react-icons/fa6";
import { MdOutlinePriceChange } from "react-icons/md";
const CustomStepper = ({ activeStep }) => {
  return (
    <Stepper
      styleConfig={{
        activeBgColor: "#3b82f6",
        activeTextColor: "#ffffff", // Active step text color
        completedBgColor: "#3b82f6",
        completedTextColor: "#ffffff", // Completed step text color
        inactiveBgColor: "#e0e0e0",
        inactiveTextColor: "#5F5E5E", // Inactive step text color
        size: "3em",
        circleFontSize: "1.5rem",
        labelFontSize: "1rem",
        borderRadius: "50%",
        fontWeight: "bold",
      }}
      connectorStyleConfig={{
        activeColor: "#3b82f6",
        completedColor: "#3b82f6",
        disabledColor: "#bdbdbd",
        size: 2, // Thickness of the connector line
        style: "solid",
      }}
      activeStep={activeStep}
      className="text-zinc-600"
    >
      <Step label="Remplir les infos">
        <FaWpforms size={24} />
      </Step>
      <Step label="Choisir un lieu">
        <FaMapLocationDot size={24} />
      </Step>
      <Step label="Ajouter un prix">
        <MdOutlinePriceChange size={24} />
      </Step>
    </Stepper>
  );
};

export default CustomStepper;
