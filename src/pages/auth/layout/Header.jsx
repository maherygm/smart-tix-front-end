import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-20 py-9">
      <h1 className="cursor-pointer bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-4xl text-transparent">
        SMART_TIX
      </h1>
      <NavLink to={"/"}>
        <Button variant="text">Pages d'accueil</Button>
      </NavLink>
    </div>
  );
};

export default Header;
