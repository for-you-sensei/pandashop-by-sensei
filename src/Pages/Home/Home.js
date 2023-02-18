import React from "react";
import { HomeCarousel } from "../../Components/HomeCarousel/HomeCarousel";
import { HomeAds } from "../../Components/HomeAds/HomeAds";
import { Partners } from "../../Components/Partners/Partners";
import img1 from "../../Assets/Images/new arrival1.png";
import img2 from "../../Assets/Images/new arrival2.png";
import { Feedback } from "../../Components/Feedback/Feedback";

export function Home() {
  const News = [
    {
      id: 0,
      img: img1,
      name: "Koylak dvoyka",
      price: "120000",
      discount: "0",
    },
    {
      id: 1,
      img: img2,
      name: "Koylak dvoyka",
      price: "90000",
      discount: "10",
    },
    {
      id: 2,
      img: img1,
      name: "Koylak dvoyka",
      price: "120000",
      discount: "0",
    },
    {
      id: 3,
      img: img2,
      name: "Koylak dvoyka",
      price: "90000",
      discount: "10",
    },
    {
      id: 4,
      img: img1,
      name: "Koylak dvoyka",
      price: "120000",
      discount: "5",
    },
    {
      id: 5,
      img: img2,
      name: "Koylak dvoyka",
      price: "90000",
      discount: "10",
    },
  ];

  const MostPopular = [
    {
      id: 0,
      img: img2,
      name: "Koylak dvoyka",
      price: "120000",
      discount: "0",
    },
    {
      id: 1,
      img: img1,
      name: "Koylak dvoyka",
      price: "90000",
      discount: "10",
    },
    {
      id: 2,
      img: img2,
      name: "Koylak dvoyka",
      price: "120000",
      discount: "0",
    },
    {
      id: 3,
      img: img1,
      name: "Koylak dvoyka",
      price: "90000",
      discount: "10",
    },
    {
      id: 4,
      img: img2,
      name: "Koylak dvoyka",
      price: "120000",
      discount: "5",
    },
    {
      id: 5,
      img: img1,
      name: "Koylak dvoyka",
      price: "90000",
      discount: "10",
    },
  ];

  const Discounts = [
    {
      id: 0,
      img: img1,
      name: "Koylak dvoyka",
      price: "120000",
      discount: "0",
    },
    {
      id: 1,
      img: img2,
      name: "Koylak dvoyka",
      price: "90000",
      discount: "10",
    },
    {
      id: 2,
      img: img1,
      name: "Koylak dvoyka",
      price: "120000",
      discount: "0",
    },
    {
      id: 3,
      img: img2,
      name: "Koylak dvoyka",
      price: "90000",
      discount: "10",
    },
    {
      id: 4,
      img: img1,
      name: "Koylak dvoyka",
      price: "120000",
      discount: "5",
    },
    {
      id: 5,
      img: img2,
      name: "Koylak dvoyka",
      price: "90000",
      discount: "10",
    },
  ];

  return (
    <>
      <HomeCarousel />
      <HomeAds data={News} name="New Products" link="/new" />
      <Partners />
      <HomeAds data={MostPopular} name="Most Popular" link="/most_popular" />
      <Feedback backgroundColor="#fff" />
      <HomeAds data={Discounts} name="Discounts" link="/discounts" />
    </>
  );
}
