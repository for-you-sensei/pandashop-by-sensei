import React from "react";
import "./MyCartActions.css";
import { PatternFormat } from "react-number-format";

export function MyCartActions() {
  return (
    <form id="myCartActions">
      <input type="text" placeholder="Fullname" />

      <PatternFormat
        format="+99 8(##) ### ####"
        allowEmptyFormatting
        mask="_"
        onValueChange={(e) => {
          //   setPhone(e.floatValue);
        }}
      />

      <textarea placeholder="Address" />

      <button className="myCartAvtions-submit">Make an order</button>
    </form>
  );
}
