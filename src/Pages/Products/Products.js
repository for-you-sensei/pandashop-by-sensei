import React from "react";
import "./Products.css";
import { ProductsFilter } from "../../Components/ProductsFilter/ProductsFilter";
import Pagination from "../../Components/Pagination/Pagination";

export function Products({ data }) {
  return (
    <div id="products">
      <ProductsFilter />

      <Pagination data={data} />
    </div>
  );
}
