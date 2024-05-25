import EventCard from "../../../../components/ui/cards/EventCard/EventCard";
import { image } from "../../../../utils/imageImport/ImageImport";

const Last = () => {
  return (
    <div className="mb-11 flex h-[80vh] flex-col gap-3">
      <h1 className="text-4xl">Evenement a passer</h1>
      <div className="flex flex-wrap gap-3 overflow-y-auto">
        {image.map((img, index) => (
          <EventCard key={index} data={img} />
        ))}
      </div>
    </div>
  );
};

export default Last;
