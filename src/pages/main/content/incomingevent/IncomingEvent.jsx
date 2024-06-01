import { Tooltip } from "@mui/material";
import { NavLink } from "react-router-dom";
import Cards from "../../../../components/ui/cards/Cards";
import { dateIdentifiers } from "../../../../hooks/dateIdentifiers";

const IncomingEvent = ({ data }) => {
  return (
    <div className="flex flex-col gap-4 bg-white p-20">
      <h1 className="text-5xl ">Evenement a venir </h1>
      <div className="cards list flex flex-wrap  gap-6">
        {data.map((val, index) => {
          if (
            dateIdentifiers(val.date) === "incoming" ||
            dateIdentifiers(val.date) === "now"
          ) {
            return (
              <Tooltip title="voir en details">
                <NavLink to={`/details/${val.id}`} key={index}>
                  <Cards key={index} data={val} types={"incoming"} />
                </NavLink>
              </Tooltip>
            );
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

export default IncomingEvent;
