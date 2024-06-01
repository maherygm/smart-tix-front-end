import { Avatar, IconButton } from "@mui/material";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { CiTurnR1 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Header = ({ data, searchFuction }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/"); // Go back to the previous page
  };
  return (
    <div className=" relative ">
      <div className="absolute left-1/2 top-12 flex h-auto w-96 -translate-x-1/2 items-center justify-center overflow-hidden rounded-lg bg-white pl-4 text-2xl shadow-md">
        <BiSearch />
        <input
          className="w-full bg-white p-3 outline-none "
          placeholder="Recherche evenement"
        />
        <div className="flex h-14 cursor-pointer items-center justify-center bg-blue-600 px-2 text-white transition-colors duration-200 hover:bg-blue-700">
          <CiTurnR1 />
        </div>
      </div>
      <div className="absolute right-10 top-10 flex items-center justify-center gap-4 rounded-full bg-white px-6 py-2 shadow-md">
        <button
          onClick={() => goBack()}
          className="rounded-full bg-blue-600 px-6 py-4  text-white transition-colors duration-200 hover:bg-blue-700 "
        >
          Deconnection
        </button>
        <p>Rakotomalala Jean Mahery</p>
        <IconButton>
          <Avatar
            sx={{
              width: 64,
              height: 64,
            }}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
