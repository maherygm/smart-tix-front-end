import "aframe";
import "aframe-react";
import { Link } from "react-router-dom";

import img from "../../../../assets/panorama/pano2.jpeg";
import "./vrlocation.css";

function VrScholl() {
  return (
    <div className="h-screen w-full">
      <a-scene>
        <img id="panorama" src={img} />
        <a-sky src="#panorama" rotation="0 -90 0"></a-sky>
        <a-camera look-controls="enabled: true"></a-camera>
      </a-scene>

      <Link
        to={"/explore"}
        className=" absolute left-6 top-2 w-24 rounded-lg bg-blue-600 px-5 py-3 text-center  text-white transition-colors duration-200 hover:bg-blue-700 "
      >
        Retour
      </Link>
    </div>
  );
}

export default VrScholl;
