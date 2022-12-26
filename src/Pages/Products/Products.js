// import React from "react";
// import "./Products.css";
// import { ProductsFilter } from "../../Components/ProductsFilter/ProductsFilter";
// import { useSelector } from "react-redux";
// import Pagination from "../../Components/Pagination/Pagination";

// export function Products() {
//   const product = useSelector((state) => state.product);

//   // const newData = product.filter((item) => item.for_whom === "women");

//   return (
//     <div id="products">
//       <ProductsFilter />

//       <Pagination data={product} />
//     </div>
//   );
// }

import React from "react";
import "./Products.css";
import { ProductsFilter } from "../../Components/ProductsFilter/ProductsFilter";
// import { useSelector } from "react-redux";
import Pagination from "../../Components/Pagination/Pagination";

export function Products({data}) {
  // const product = useSelector((state) => state.product);

  // const newData = product.filter((item) => item.for_whom === "women");

  return (
    <div id="products">
      <ProductsFilter />

      <Pagination data={data} />
    </div>
  );
}
