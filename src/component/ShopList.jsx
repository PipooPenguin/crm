import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const ShopList = () => {
  const {PRODUCTS,addToCart,cartItems} = useContext(ShopContext) ;
  const hanleAddToCart = (itemID) => {
    console.log("ShopList.jsx hanleAddToCart cartItems before:",cartItems);
    addToCart(itemID);
  };
  return (
    <div className="untree_co-section product-section before-footer-section">
      <div className="container">
        <div className="row">
          {PRODUCTS.map((item) => (
            <div className="col-12 col-md-4 col-lg-3 mb-5" key={item.id}>
              <a className="product-item" href="#">
                <img
                  src={item.img_url.link}
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title">{item.name}</h3>
                <strong className="product-price">{item.price}đ</strong>

                <span className="icon-cross" onClick={()=>hanleAddToCart(item.id)}>
                  <img
                    src="src/assets/images/cross.svg"
                    className="img-fluid"
                  />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopList;
