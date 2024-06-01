const EventCard = ({ data }) => {
  if (!data) {
    return <p>aucun donnée n'a ete recu</p>
  }
  return (
    <div className="relative h-96 w-72 overflow-hidden rounded-md">
      <img className="w-full" src={data.img} />
      <div className="absolute top-0 z-20 size-full bg-black/40 p-2">
        <p className="text-white">{data.title}</p>
      </div>
    </div>
  );
};

export default EventCard;
