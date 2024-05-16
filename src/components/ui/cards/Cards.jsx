import React from "react";

const Cards = ({ data }) => {
  return (
    <div className="flex h-40 w-96 cursor-pointer shadow-md transition-shadow duration-200 hover:shadow-lg">
      <div className="w-1/3 overflow-hidden">
        <img src={data.img} className="" />
      </div>
      <div className="w-2/3 p-4">
        <h1 className="text-xl">{data.title}</h1>
        <p className="text-zinc-500"> {data.locate}</p>
        <p className="text-zinc-600">A {data.heure}</p>
        <p className="text-zinc-950">Prix d'entée : {data.prix} Ar</p>
      </div>
    </div>
  );
};

export default Cards;
