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
    },
    {
      id: 1,
      img: img2,
      name: "Koylak dvoyka",
      price: "90000",
    },
    {
      id: 2,
      img: img1,
      name: "Koylak dvoyka",
      price: "120000",
    },
    {
      id: 3,
      img: img2,
      name: "Koylak dvoyka",
      price: "90000",
    },
    {
      id: 4,
      img: img1,
      name: "Koylak dvoyka",
      price: "120000",
    },
    {
      id: 5,
      img: img2,
      name: "Koylak dvoyka",
      price: "90000",
    },
  ];

  const MostPopular = [
    {
      id: 0,
      img: img2,
      name: "Koylak dvoyka",
      price: "120000",
    },
    {
      id: 1,
      img: img1,
      name: "Koylak dvoyka",
      price: "90000",
    },
    {
      id: 2,
      img: img2,
      name: "Koylak dvoyka",
      price: "120000",
    },
    {
      id: 3,
      img: img1,
      name: "Koylak dvoyka",
      price: "90000",
    },
    {
      id: 4,
      img: img2,
      name: "Koylak dvoyka",
      price: "120000",
    },
    {
      id: 5,
      img: img1,
      name: "Koylak dvoyka",
      price: "90000",
    },
  ];

  const Discaunts = [
    {
      id: 0,
      img: img1,
      name: "Koylak dvoyka",
      price: "120000",
    },
    {
      id: 1,
      img: img2,
      name: "Koylak dvoyka",
      price: "90000",
    },
    {
      id: 2,
      img: img1,
      name: "Koylak dvoyka",
      price: "120000",
    },
    {
      id: 3,
      img: img2,
      name: "Koylak dvoyka",
      price: "90000",
    },
    {
      id: 4,
      img: img1,
      name: "Koylak dvoyka",
      price: "120000",
    },
    {
      id: 5,
      img: img2,
      name: "Koylak dvoyka",
      price: "90000",
    },
  ];

  return (
    <>
      <HomeCarousel />
      <HomeAds data={News} name="New Products" link="/new" />
      <Partners />
      <HomeAds data={MostPopular} name="Most Popular" link="/most_popular" />
      <Feedback />
      <HomeAds data={Discaunts} name="Discaunts" link="/discaunts" />
    </>
  );
}

// koroche ideani itidan. api berilganda daje maplarni props qilish (new arrivals, most popular...) hammasi bitta componentda bo'ladi. lekin 5 tasini o'rnini bosadi
