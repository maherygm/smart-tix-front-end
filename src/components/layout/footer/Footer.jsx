import { Button, TextField } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" w-full bg-blue-50" id="contact">
        <div className="flex justify-evenly py-20">
          <div className="w-1/3">
            <h1 className="text-6xl">Envoyer nous un message</h1>
            <p className="text-zinc-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur, rerum, perferendis saepe pariatur reprehenderit
              reiciendis enim ab molestias, aperiam modi perspiciatis
              exercitationem temporibus nemo dignissimos minus iure asperiores.
              Quae minus perferendis doloremque, optio error nobis dignissimos
              nihil reiciendis labore natus qui esse quia, perspiciatis
              excepturi numquam ratione beatae unde. Praesentium.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-5">
              <TextField variant="filled" label="nom" />
              <TextField variant="filled" label="adresse email" />
            </div>
            <textarea
              className="h-32 resize-none rounded-md p-6 outline-none"
              placeholder="Message"
            />
            <div>
              <Button variant="contained">Envoyer</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
