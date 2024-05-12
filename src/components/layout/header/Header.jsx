import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);
  function scrolling() {
    window.addEventListener("scroll", toggle);
  }
  function toggle() {
    console.log(window.scrollY);

    if (window.scrollY > 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  }
  useEffect(() => {
    scrolling();

    return () => {
      window.removeEventListener("scroll", toggle);
    };
  });
  return (
    <div className="relative z-50 flex items-center justify-center">
      <div
        className={`fixed top-11 mx-auto my-0  h-auto w-4/5  py-7 transition-transform ${active ? " -translate-y-6  rounded-3xl bg-zinc-950/70 p-5  backdrop-blur-sm" : ""}`}
      >
        <div className="flex items-center justify-between text-white">
          <h1 className="cursor-pointer bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-4xl text-transparent">
            <a href="#banner">SMART_TIX</a>
          </h1>
          <div>
            <ul className="flex gap-16">
              <li className="cursor-pointer transition-colors duration-200 hover:text-blue-300">
                <a href="#a_propos">A propos</a>
              </li>
              <li className="cursor-pointer transition-colors duration-200 hover:text-blue-300">
                <a href="#contact">Contact</a>
              </li>
              <li className="cursor-pointer transition-colors duration-200 hover:text-blue-300">
                Explorer
              </li>
              <li className="cursor-pointer transition-colors duration-200 hover:text-blue-300">
                Organiser
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center px-4">
            <NavLink to={"/auth/login"}>
              <Button variant="contained" className="flex gap-3">
                <p>se connecter</p> <CgProfile />
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
