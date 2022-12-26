import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Navbar } from "./Components/Navbar/Navbar";
import { Config } from "./Config/Config";
import { Home } from "./Pages/Home/Home";
import { New } from "./Pages/New/New";
import { Delivery } from "./Pages/Delivery/Delivery";
import { Contact } from "./Pages/Contact/Contact";
import { Partner } from "./Pages/Partner/Partner";
import { Login } from "./Components/Login/Login";
import { Cart } from "./Pages/Cart/Cart";
import { Orders } from "./Pages/Orders/Orders";
import { MyProfile } from "./Pages/MyProfile/MyProfile";
import { Products } from "./Pages/Products/Products";
// import { ForMen } from "./Pages/For_Men/For_Men";
import { useSelector } from "react-redux";

export function Router() {
  const product = useSelector((state) => state.product);

  const forMen = product.filter((item) => item.for_whom === "men");

  return (
    <div id="router">
      <div className="router-nav">
        <Header />
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all_products" element={<Products data={product} />} />
        <Route path="/for_men" element={<Products data={forMen} />} />
        {/* <Route path="/for_men" element={<ForMen />} /> */}
        <Route path="/new" element={<New />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my_cart" element={<Cart />} />
        <Route path="/my_orders" element={<Orders />} />
        <Route path="/my_profile" element={<MyProfile />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>

      <Login />
      <Footer />
      {/* <Loading /> */}
      <Config />
    </div>
  );
}
