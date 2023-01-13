import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../../Components/Pagination/Pagination";
import { ProductViewInfo } from "../../Components/ProductViewInfo/ProductViewInfo";
import "./ProductView.css";

export function ProductView() {
  const data = useSelector((state) => state.product);

  return (
    <div id="ProductView">
      <ProductViewInfo />

      <Pagination data={data} />
    </div>
  );
}

// Pagination's card sizes
