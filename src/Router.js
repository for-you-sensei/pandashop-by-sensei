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
import { Register } from "./Components/Register/Register";
import { ForgotPassword } from "./Components/ForgotPassword/ForgotPassword";
import { NotFoundPage } from "./Components/NotFoundPage/NotFoundPage";

export function Router() {
  const product = useSelector((state) => state.product);

  const forMen = product.filter((item) => item.for_whom === "men");

  const forWomen = product.filter((item) => item.for_whom === "women");

  const forGirls = product.filter((item) => item.for_whom === "women");

  const forChildren = product.filter((item) => item.for_whom === "children");

  const clothesPages = [
    {
      id: 0,
      path: "/all_products",
      data: product,
    },
    {
      id: 1,
      path: "for_men",
      data: forMen,
    },
    {
      id: 2,
      path: "for_women",
      data: forWomen,
    },
    {
      id: 3,
      path: "for_girls",
      data: forGirls,
    },
    {
      id: 4,
      path: "for_children",
      data: forChildren,
    },
  ];

  return (
    <div id="router">
      <div className="router-nav">
        <Header />
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        {clothesPages.map((item) => {
          return (
            <Route
              key={item.id}
              path={item.path}
              element={<Products data={item.data} />}
            />
          );
        })}

        <Route path="/new" element={<New />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my_cart" element={<Cart />} />
        <Route path="/my_orders" element={<Orders />} />
        <Route path="/my_profile" element={<MyProfile />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Login />
      <Register />
      <ForgotPassword />
      <Footer />
      {/* <Loading /> */}
      <Config />
    </div>
  );
}

// product fillter, product view

// my profile + update pass, search
