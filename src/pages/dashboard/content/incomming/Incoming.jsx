import EventCard from "../../../../components/ui/cards/EventCard/EventCard";
import { image } from "../../../../utils/imageImport/ImageImport";
const Incoming = () => {
  return (
    <div className="my-10 flex  flex-col gap-3">
      <h1 className="text-4xl">Evenement a vennir</h1>
      <div className="overflow-hidden rounded-md ">
        <div className="flex h-[80vh] flex-wrap gap-3 overflow-y-auto ">
          {image.map((img, index) => (
            <EventCard key={index} data={img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Incoming;
