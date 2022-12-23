import React from "react";
import "./ProductsFilter.css";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";

export function ProductsFilter() {
  return (
    <div id="ProductsFilter">
      <button className="ProductsFilter-filter">
        <TuneIcon />
      </button>

      <form className="ProductsFilter-form">
        <input type="text" placeholder="What are you looking for?" />
        <button>
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}
