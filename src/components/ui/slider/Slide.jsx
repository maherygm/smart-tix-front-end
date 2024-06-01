import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// eslint-disable-next-line react/prop-types
const Slide = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 6000,
    cssEase: "linear",
  };

  if (!data) {
    return <p>Erreur , il n'y a pas de donnée</p>
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((val, index) => (
          <div
            className="mx-4 max-h-[90vh] overflow-hidden rounded-lg p-2  outline-none"
            key={index}
          >
            <img
              className="w-full cursor-pointer rounded-lg"
              src={val.image_path}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slide;
