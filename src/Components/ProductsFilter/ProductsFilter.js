import React from "react";
import "./ProductsFilter.css";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
// import { acRegister } from "../../Redux/Register";
// import { useDispatch, useSelector } from "react-redux";

export function ProductsFilter() {
  // const dispatch = useDispatch();
  // const register = useSelector((state) => state.register);

  return (
    <div
      id="ProductsFilter"
      onClick={(e) => {
        e.preventDefault();
        // dispatch(acRegister(false));
      }}
    >
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
