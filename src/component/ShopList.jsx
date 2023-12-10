import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const ShopList = () => {
  const [shop, setShop] = useState([]);
  useEffect(() => {
    const callAxios = async () => {
      try {
        const token = "t-g206ca3OZ2YDZL3APCR5VMZ53MIECFMINMICVGSJ";
        axios.defaults.headers.common = {
          Authorization: `Bearer ${token}`,
        };
        const url =
          "https://open.larksuite.com/open-apis/bitable/v1/apps/VuOJbA1FhaF1oGsIi3IlFmDsgad/tables/tblcVRE6mcPTnTVS/records";
        const data = await axios.get(url);
        console.log("ShopList.jsx useEffect data: ", data.data.items);
        // setShop(data.data);
      } catch (error) {
        console.log("ShopList.jsx useEffect error");
      }
    };
    callAxios();
  }, []);
  return (
    <div className="untree_co-section product-section before-footer-section">
      <div className="container">
        <div className="row">
          {shop.map((item) => (
            <div className="col-12 col-md-4 col-lg-3 mb-5" key={item.id}>
              <a className="product-item" href="#">
                <img
                  src={item.img_url}
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title">{item.name}</h3>
                <strong className="product-price">{item.price}đ</strong>

                <span className="icon-cross">
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
