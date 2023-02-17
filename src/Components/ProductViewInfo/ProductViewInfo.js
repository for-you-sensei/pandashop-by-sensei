import axios from "axios";
import "./ProductViewInfo.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function ProductViewInfo() {
  const [select, setSelect] = useState(0);
  let [count, setCount] = useState(1);
  const [add, setAdd] = useState("");
  const [productData, setProductData] = useState({});
  const [image, setImage] = useState([]);
  const [size, setSize] = useState([]);
  const location = useLocation();
  const id = location.pathname.split("/").pop();

  useEffect(() => {
    // dispatch(acLoading(true));
    axios
      .get(`https://server.pandashop.uz/product_test?id=${id}`, {
        headers: {
          token: "token",
        },
      })
      .then((res) => {
        setProductData(res.data);
        setImage(JSON.parse(res.data.images));
        setSize([...res.data.size].join("").split("/"));
        // dispatch(acLoading(false));
      })
      .catch((err) => {
        console.log(err);
        // dispatch(acLoading(false));
      });
  }, [id]); // dispatch

  return (
    <div id="ProductViewInfo">
      <div className="ProductViewInfo-images">
        <figure className="ProductViewInfo-figure">
          <img src={image[select]} alt="" />
        </figure>

        <div className="ProductViewInfo-select-images">
          {image.slice(0, 4).map((img, i) => {
            return (
              <figure
                key={i}
                onClick={() => setSelect(i)}
                className="ProductViewInfo-sel-img-figure"
              >
                <span
                  style={
                    select === i ? { display: "none" } : { display: "flex" }
                  }
                ></span>
                <img src={img} alt="" />
              </figure>
            );
          })}
        </div>
      </div>

      <div className="ProductViewInfo-about">
        <div className="ProductViewInfo-about-info">
          <p className="ProductViewInfo-name">
            {productData.name === "" ? "???" : productData.name}
          </p>
          <p className="change_text">
            Price:
            <span> {productData.price} sum</span>
          </p>
          <p className="change_text">
            Season: <span>{productData.season}</span>
          </p>
          <p className="change_text">
            Type: <span>{productData.type}</span>
          </p>
          <p className="change_text">
            For Whom: <span>{productData.for_whom}</span>
          </p>
        </div>

        <div className="ProductViewInfo-sizes">
          <p>Sizes: </p>
          {size.map((size, i) => {
            return (
              <button
                key={i}
                onClick={() => {
                  if (add === size) {
                    setAdd("");
                  } else {
                    setAdd(size);
                  }
                }}
              >
                {size}
              </button>
            );
          })}
          <p>{add}</p>
        </div>

        <div className="ProductViewInfo-actions">
          <div className="ProductViewInfo-count">
            <button
              onClick={() => {
                setCount(count + 1);

                // setCount(productData.count ++); all product counts 0
              }}
            >
              +
            </button>

            <p>{count}</p>

            <button
              onClick={() => {
                setCount(count === 1 ? 1 : count - 1);
              }}
            >
              -
            </button>
          </div>

          <button
            className="ProductViewInfo-about-addToCart"
            //  onClick={() => {}}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
