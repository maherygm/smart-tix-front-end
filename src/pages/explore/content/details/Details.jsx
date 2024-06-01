import React from "react";
import { useNavigate } from "react-router-dom";

const Details = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="absolute bottom-5 right-10  w-96  rounded-lg bg-white p-2 shadow-md">
      <h1>Details Evenement </h1>
      <div className="flex flex-col gap-3">
        <img src={data.image_path} />
        <div className="flex justify-between">
          <p>{data.titre_event}</p>
          <p className={"rounded-md bg-zinc-900 p-2 text-white"}>Prix {data.prix} Ar</p>
        </div>
        <p>{data.description}</p>
        <p>{data.address}</p>
        <button onClick={() => navigate(`/details/${data.id}`)} className="rounded-md bg-blue-500 p-3 text-white transition-colors duration-200 hover:bg-blue-700">
          Achter des ticker
        </button>
      </div>
    </div>
  );
};

export default Details;
