import { Avatar, Badge, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { PiQrCodeDuotone } from "react-icons/pi";
import { RiSearch2Line } from "react-icons/ri";
import AddEvenement from "../addEvenement/AddEvenement";
const Header = () => {
  const [openAddEvent, setOpenAddEvent] = useState(false);
  function handleClose() {
    setOpenAddEvent(false);
  }
  return (
    <>
      <>
        <AddEvenement open={openAddEvent} handleClose={handleClose} />
      </>
      <div className=" flex items-center justify-between  py-5">
        <div className="flex gap-6">
          <div>
            <h1 className="text-3xl text-zinc-900">SMART_TIX </h1>
            <p className=" text-zinc-500">Tableau de Bord</p>
          </div>
        </div>

        <div className="flex items-center gap-3 overflow-hidden rounded-full bg-zinc-200 px-3">
          <RiSearch2Line className="text-2xl text-zinc-600" />
          <input
            className="bg-zinc-200  py-3  outline-none"
            placeholder="recherche"
          />
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => setOpenAddEvent(true)}
            className="flex items-center gap-3 rounded-md bg-blue-600 px-3 py-2 text-white transition-colors duration-200 hover:bg-blue-700"
          >
            <span className="text-3xl">+</span>
            <p> Nouveau Evenement</p>
          </button>
          <button className="flex items-center gap-3 rounded-md bg-blue-100 px-3 py-2 text-zinc-600 transition-colors duration-200 hover:bg-blue-200">
            <span className="text-3xl">
              <MdOutlineAddLocationAlt />
            </span>
            <p> Nouvelle Place</p>
          </button>
          <button className="flex items-center gap-3 rounded-md bg-blue-100 px-3 py-2 text-zinc-600 transition-colors duration-200 hover:bg-blue-200">
            <span className="text-3xl">
              <PiQrCodeDuotone />
            </span>
            <p> Scanner un ticket</p>
          </button>
        </div>
        <div>
          <button className="rounded-full bg-blue-600 p-3 text-white transition-colors duration-200 hover:bg-blue-700">
            se deconnecter
          </button>

          <Tooltip title="compte">
            <IconButton>
              <Badge variant="dot" color="success">
                <Avatar>M</Avatar>
              </Badge>
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default Header;
