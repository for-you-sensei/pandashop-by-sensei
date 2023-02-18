import React from "react";
import "./Partners.css";
import img1 from "../../Assets/Images/Partner.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "5%", zIndex: "999" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "5%", zIndex: "999" }}
      onClick={onClick}
    />
  );
}

export function Partners() {
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
    {
      id: 4,
      img: img1,
    },
    {
      id: 5,
      img: img1,
    },
    {
      id: 6,
      img: img1,
    },
    {
      id: 7,
      img: img1,
    },
    {
      id: 8,
      img: img1,
    },
    {
      id: 9,
      img: img1,
    },
  ];

  const settings = {
    centerMode: true,
    infinite: true,
    // dots: true,
    slidesToScroll: 1,
    slidesToShow: 5,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 6000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // appendDots: (dots) => (
    //   <div className="partner-dots-container">
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),
    // customPaging: () => <div className="partner-dots-card"></div>,
  };

  return (
    <div id="partner-carousel-box">
      <div id="partner-carousel">
        <p>Our Partners</p>

        <Slider {...settings} className="partner-slick">
          {data.map((item) => {
            return (
              <figure key={item.id} className="partner-carousel-figure">
                <img src={item.img} alt="" />
              </figure>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
