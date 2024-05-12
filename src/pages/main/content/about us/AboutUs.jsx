import React from "react";

const AboutUs = () => {
  return (
    <div id="a_propos" className="flex flex-col gap-10 bg-white px-20">
      <h1 className=" text-9xl">
        Get in touch with <br /> Upscalix
      </h1>
      <div className="flex justify-around py-20 text-2xl text-zinc-600">
        <div>
          <p>123 Digital Street</p>
          <p>Melbourne VIC 3000</p>
          <p>Australia</p>
        </div>
        <div>
          <p>+261 34 76 293 34</p>
          <p>Maheryrak1234@gmail.com</p>
        </div>
        <div>
          <p>instagram</p>
          <p>linkedin</p>
          <p>facebook</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
