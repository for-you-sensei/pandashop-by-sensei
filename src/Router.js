import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Navbar } from "./Components/Navbar/Navbar";
import { Config } from "./Config/Config";
import { Home } from "./Pages/Home/Home";
import { New } from "./Pages/New/New";
import { Partner } from "./Pages/Partner/Partner";

export function Router() {
  return (
    <div id="router">
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New/>} />
        <Route path="/partner" element={<Partner />} />
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>

      <Footer />
      {/* <Loading /> */}
      <Config />
    </div>
  );
}
