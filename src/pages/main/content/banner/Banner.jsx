import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import img1 from "../../../../assets/images/imageBanner/img-1.jpg";
import img2 from "../../../../assets/images/imageBanner/img-3.jpg";
import img4 from "../../../../assets/images/imageBanner/img-5.jpg";

const Banner = () => {
  const scopeRef = useRef(null);
  useGSAP(
    () => {
      gsap.from(".box", {
        opacity: 0,
        duration: 1,
        stagger: 0.5,
      });
    },
    {
      scope: scopeRef,
    }
  );
  return (
    <div
      className=""
      style={{
        background: `url(${img4})`,
      }}
      ref={scopeRef}
      id="banner"
    >
      <div className="flex h-[90vh] items-center justify-around pt-52 text-white">
        <div className="flex h-4/5 max-w-lg flex-col gap-3 ">
          <h1 className=" text-7xl">click start skills that open doors</h1>
          <p className="text-zinc-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus minima voluptatibus reiciendis rem commodi? Numquam
            earum eaque alias saepe tempora blanditiis sed vero dolor nulla
            pariatur accusamus facere reprehenderit doloribus nam hic explicabo
          </p>
          <div className="flex gap-3 text-white transition-colors">
            <div className="cursor-pointer rounded-full border border-solid border-zinc-700 bg-zinc-800 p-3 text-2xl text-white transition-colors hover:bg-zinc-900">
              <FaFacebook />
            </div>
            <div className="cursor-pointer rounded-full border border-solid border-zinc-700 bg-zinc-800 p-3 text-2xl text-white transition-colors hover:bg-zinc-900">
              <FaTwitter />
            </div>
            <div className="cursor-pointer rounded-full border border-solid border-zinc-700 bg-zinc-800 p-3 text-2xl text-white transition-colors hover:bg-zinc-900">
              <FaYoutube />
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex h-[60vh] w-[50%] gap-4 ">
          <div className="flex h-full w-3/5 flex-col gap-4">
            <div className="box h-2/3 w-full overflow-hidden rounded-3xl bg-blue-500">
              <img className="w-full " src={img1} />
            </div>
            <div className="box h-1/3 w-full rounded-3xl bg-gray-800"></div>
          </div>
          <div className="flex w-2/5 flex-col gap-4">
            <div className="box flex h-2/5  w-full flex-col justify-around rounded-3xl px-5">
              <div className="z-1 relative flex w-fit -rotate-12 cursor-pointer items-center gap-2 rounded-full bg-blue-500 p-3 text-4xl transition-colors duration-200 hover:bg-blue-600">
                <BsArrowRight />
                <p>start today</p>
              </div>
              <div className="flex w-full justify-between gap-3">
                <div className="w-2/3 cursor-pointer rounded-full bg-slate-700 p-5 transition-colors duration-200 hover:bg-slate-800">
                  ❤🖤❤💖
                </div>
                <div className=" cursor-pointer rounded-full bg-slate-700 p-5 transition-colors duration-200 hover:bg-slate-800">
                  😎😁
                </div>
              </div>
            </div>
            <div className="box h-3/5 w-full overflow-hidden rounded-3xl  bg-gray-200">
              <img className="size-full" src={img2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
