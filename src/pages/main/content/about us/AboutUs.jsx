import React from "react";

const AboutUs = () => {
  return (
    <div id="a_propos" className="flex flex-col gap-10 bg-white px-20 py-10">
      <h1 className=" text-9xl">
        <p data-aos="fade-right" data-aos-anchor-placement="center-center">
          Get in touch with
        </p>
        <p data-aos="fade-down" data-aos-anchor-placement="center-center">
          Upscalix
        </p>
      </h1>
      <div className="flex justify-around py-20 text-2xl text-zinc-600">
        <div data-aos="fade-up" data-aos-anchor-placement="center-center">
          <p>123 Digital Street</p>
          <p>Melbourne VIC 3000</p>
          <p>Australia</p>
        </div>
        <div data-aos="fade-up " data-aos-anchor-placement="center-center">
          <p>+261 34 76 293 34</p>
          <p>Maheryrak1234@gmail.com</p>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center">
          <p>instagram</p>
          <p>linkedin</p>
          <p>facebook</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
