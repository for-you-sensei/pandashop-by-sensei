import React from "react";
import { ProductsFilter } from "../../Components/ProductsFilter/ProductsFilter";
import { useSelector } from "react-redux";
import Pagination from "../../Components/Pagination/Pagination";

export function ForMen() {
  const product = useSelector((state) => state.product);

  const forMen = product.filter((item) => item.for_whom === "men");

  return (
    <div id="products">
      <ProductsFilter />

      <Pagination data={forMen} />
    </div>
  );
}
