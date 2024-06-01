import { formatDate } from "../../../hooks/formatDate";

const Cards = ({ data }) => {

  if (!data) {
    return <p>Erreur no data In the card </p>
  }
  return (
    <div className="flex h-40 w-96 cursor-pointer shadow-md transition-shadow duration-200 hover:shadow-lg">
      <div className="w-1/3 overflow-hidden">
        <img src={data.image_path} />
      </div>
      <div className="w-2/3 p-4">
        <h1 className="text-xl">{data.titre_event}</h1>
        <p className="text-zinc-500"> {data.lieu}</p>
        <p className="text-zinc-600">A {formatDate(data.date)}</p>
        <p className="text-zinc-950">Prix d'entée : {data.prix} Ar</p>
      </div>
    </div>
  );
};

export default Cards;
