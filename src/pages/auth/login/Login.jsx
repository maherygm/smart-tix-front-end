import { Button, TextField } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../../assets/images/400x500/img14.jpg";
import img2 from "../../../assets/images/400x500/img15.jpg";

const Login = () => {
  return (
    <div
      className=" flex h-[80vh] w-full items-center"
      // style={{
      //   background: `url(${img3})`,
      // }}
    >
      <div className="flex w-full justify-between gap-6">
        <div className="w-1/5 rounded-s-2xl">
          <img src={img} className="w-full  rounded-e-[50px]" />
        </div>
        <div className="flex w-2/5 flex-col gap-6 px-40 ">
          <h1 className="text-4xl">Connection</h1>
          <div className="flex items-center gap-3">
            <p className="text-zinc-600">Vous etes nouveaux ?</p>
            <NavLink to={"/auth/signUp"}>
              <p className="text-blue-600">Inscription</p>
            </NavLink>
          </div>

          <div className="flex flex-col gap-6 ">
            <TextField required label="nom d'utilisateur ou email" />
            <TextField required label="mots de passe" />
          </div>
          <NavLink>
            <p className="text-blue-600">Mots de passse oublier ?</p>
          </NavLink>
          <div className="w-30">
            <Button variant="contained">Se connecter</Button>
          </div>
        </div>
        <div className="w-1/5 ">
          <img src={img2} className="rounded-s-[50px]" />
        </div>
      </div>
    </div>
  );
};

export default Login;
