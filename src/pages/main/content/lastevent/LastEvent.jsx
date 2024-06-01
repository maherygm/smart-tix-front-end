import Cards from "../../../../components/ui/cards/Cards";
import { dateIdentifiers } from "../../../../hooks/dateIdentifiers";
const LastEvent = ({ data }) => {
  return (
    <div className="flex flex-col gap-4 bg-white p-20">
      <h1 className="text-5xl ">Evenement Passé </h1>
      <div className="cards list flex flex-wrap  gap-6">
        {data.map((val, index) => {
          if (dateIdentifiers(val.date) === "past") {
            return <Cards key={index} data={val} types={"incoming"} />;
          }
        })}
      </div>
      <div>
        <p className="cursor-pointer text-right text-2xl text-blue-500">
          Voir plus
        </p>
      </div>
    </div>
  );
};

export default LastEvent;
