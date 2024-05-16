import { Avatar, IconButton } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <div className=" relative ">
      <div className="absolute right-10 top-10">
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
