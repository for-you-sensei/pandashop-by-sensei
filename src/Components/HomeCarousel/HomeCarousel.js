import React from "react";
import "./HomeCarousel.css";
import img1 from "../../Assets/Images/Без bg.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", right: "2%", zIndex: "999", }}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", left: "2%", zIndex: "999", }}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

export function HomeCarousel() {
  const data = [
    {
      id: 0,
      img: img1,
    },
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img1,
    },
    {
      id: 3,
      img: img1,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 6000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div id="home-carousel">
      <Slider {...settings} className="home-slick">
        {data.map((item) => {
          return (
            <figure key={item.id} className="home-carousel-figure">
              <img src={item.img} alt="" />
            </figure>
          );
        })}
      </Slider>
    </div>
  );
}
