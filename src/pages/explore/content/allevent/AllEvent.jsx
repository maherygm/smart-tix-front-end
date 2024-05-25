import React from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Tags from "../../../../components/ui/tags/Tags";
import { image } from "../../../../utils/imageImport/ImageImport.js";
const AllEvent = () => {
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
    <div ref={scope} className="absolute left-10 top-32 flex flex-col gap-3">
      {image.map((el, index) => (
        <div className="elment" key={index}>
          <Tags data={el} />
        </div>
      ))}
    </div>
  );
};

export default AllEvent;
