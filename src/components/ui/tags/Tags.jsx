const Tags = ({ data }) => {
  return (
    <div className="flex w-fit cursor-pointer overflow-hidden rounded-md bg-white shadow-md transition-shadow duration-200 hover:shadow-lg">
      <div className="h-full  w-14">
        <img className="size-full" src={data.img} />
      </div>
      <div className=" p-2">
        <div className="flex gap-4">
          <p>{data.title}</p>
          <p className="text-zinc-600">{data.locate}</p>
        </div>
        <p className="text-zinc-600">{data.prix}</p>
      </div>
    </div>
  );
};

export default Tags;
