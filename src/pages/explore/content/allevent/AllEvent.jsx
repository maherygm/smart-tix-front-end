import React from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Tags from "../../../../components/ui/tags/Tags";
const AllEvent = ({ data, selectLocation }) => {
  const scope = useRef(null);
  useGSAP(
    () => {
      gsap.from(".elment", {
        opacity: 0,
        x: -200,
        stagger: 0.2,
        delay: 1,
      });
    },
    {
      scope: scope,
    }
  );
  return (
    <div className="absolute bottom-2 left-10  overflow-hidden p-2">
      <div className="flex items-center justify-between rounded-t-md bg-white px-2">
        <p>Les Evenements Disponible</p>
      </div>
      <div ref={scope} className="scrollbar-none  flex  h-[50vh] flex-col gap-3 overflow-y-auto bg-white">
        {data.map((el, index) => (
          <div onClick={() => selectLocation(el)} className="elment" key={index}>
            <Tags data={el} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEvent;
