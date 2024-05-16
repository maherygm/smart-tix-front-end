import Cards from "../../../../components/ui/cards/Cards";
import { image } from "../../../../utils/imageImport/ImageImport";

const IncomingEvent = ({ data }) => {
  return (
    <div className="flex flex-col gap-4 bg-white p-20">
      <h1 className="text-5xl ">Evenement a venir </h1>
      <div className="cards list flex flex-wrap justify-between gap-6">
        {image.map((val, index) => (
          <Cards key={index} data={val} />
        ))}
      </div>
      <div>
        <p className="cursor-pointer text-right text-2xl text-blue-500">
          Voir plus
        </p>
      </div>
    </div>
  );
};

export default IncomingEvent;
