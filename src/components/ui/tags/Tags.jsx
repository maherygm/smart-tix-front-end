const Tags = ({ data }) => {
  if (!data) {
    return <p>no data recaived</p>
  }
  return (
    <div className="flex w-fit cursor-pointer overflow-hidden rounded-md bg-white shadow-md transition-shadow duration-200 hover:shadow-lg">
      <div className="h-full w-16">
        <img className="size-full" src={data.image_path} />
      </div>
      <div className="p-2 ">
        <div className="flex flex-col ">
          <p>{data.lieu}</p>
          <p className="text-zinc-600">{data.address}</p>
        </div>
        <p className="text-zinc-600">{data.prix}</p>
      </div>
    </div>
  );
};

export default Tags;
