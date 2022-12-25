import React from "react";
import "./Products.css";
import { ProductsFilter } from "../../Components/ProductsFilter/ProductsFilter";
import { AllProducts } from "../../Components/AllProducts/AllProducts";
import img1 from "../../Assets/Images/new arrival1.png";
import img2 from "../../Assets/Images/new arrival2.png";

export function Products() {
  const data = [
    {
      id: 0,
      img: img1,
      name: "Koylak dvoyka",
      price: "120000",
      discaunt: "0",
    },
    {
      id: 1,
      img: img2,
      name: "Koylak dvoyka",
      price: "90000",
      discaunt: "10",
    },
    {
      id: 2,
      img: img1,
      name: "Koylak dvoyka",
      price: "120000",
      discaunt: "0",
    },
    {
      id: 3,
      img: img2,
      name: "Koylak dvoyka",
      price: "90000",
      discaunt: "10",
    },
    {
      id: 4,
      img: img1,
      name: "Koylak dvoyka",
      price: "120000",
      discaunt: "5",
    },
    {
      id: 5,
      img: img2,
      name: "Koylak dvoyka",
      price: "90000",
      discaunt: "10",
    },
    {
      id: 6,
      img: img1,
      name: "Koylak dvoyka",
      price: "120000",
      discaunt: "0",
    },
    {
      id: 7,
      img: img2,
      name: "Koylak dvoyka",
      price: "90000",
      discaunt: "10",
    },
    {
      id: 8,
      img: img1,
      name: "Koylak dvoyka",
      price: "120000",
      discaunt: "0",
    },
  ];

  return (
    <div id="products">
      <ProductsFilter />
      <AllProducts data={data} />
    </div>
  );
}

//muammo: menga hozir linkni boshidan o'qib aynan home products pagegasiga otadigan va uselocationdan olib sort qiladigan funksiya kerak ekan
