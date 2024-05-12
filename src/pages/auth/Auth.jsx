import React from "react";
import { Outlet } from "react-router-dom";
import { Fotter } from "./layout/Fotter";
import Header from "./layout/Header";

const Auth = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Fotter />
    </>
  );
};

export default Auth;
