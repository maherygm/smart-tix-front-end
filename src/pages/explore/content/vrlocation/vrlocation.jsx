import "aframe";
import "aframe-react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import img from "../../../../assets/panorama/pano2.jpeg";
import "./vrlocation.css";

function VrScholl() {
  const navigate = useNavigate();
  function goback(parameters) {
    navigate(-1);
  }

  return (
    <div className="w-full h-screen">
      <a-scene>
        <img id="panorama" src={img} />
        <a-sky src="#panorama" rotation="0 -90 0"></a-sky>
        <a-camera look-controls="enabled: true"></a-camera>
      </a-scene>

      <Link
        onClick={() => goback()}
        className="absolute w-24 px-5 py-3 text-center text-white transition-colors duration-200 bg-blue-600 rounded-lg left-6 top-2 hover:bg-blue-700 "
      >
        Retour
      </Link>
    </div>
  );
}

export default VrScholl;
