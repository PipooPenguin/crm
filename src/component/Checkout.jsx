import React from "react";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Thankyou from "./Thankyou";

const Checkout = () => {
  const {
    PRODUCTS,
    addToCart,
    cartItems,
    filteredProducts,
    getTotalCartAmount,
  } = useContext(ShopContext);
  const [success, setSuccess] = useState(false);
  const handleSubmit = () => {
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <Thankyou />
      ) : (
        <div className="untree_co-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-5 mb-md-0">
                <h2 className="h3 mb-3 text-black">Billing Details</h2>
                <div className="p-3 p-lg-5 border bg-white">
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label for="c_fname" className="text-black">
                        Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_fname"
                        name="c_fname"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label for="c_address" className="text-black">
                        Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_address"
                        name="c_address"
                        placeholder="Street address"
                      />
                    </div>
                  </div>

                  <div className="form-group row mb-5">
                    <div className="col-md-6">
                      <label for="c_email_address" className="text-black">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_email_address"
                        name="c_email_address"
                      />
                    </div>
                    <div className="col-md-6">
                      <label for="c_phone" className="text-black">
                        Phone <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_phone"
                        name="c_phone"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row mb-5">
                  <div className="col-md-12">
                    <h2 className="h3 mb-3 text-black">Coupon Code</h2>
                    <div className="p-3 p-lg-5 border bg-white">
                      <label for="c_code" className="text-black mb-3">
                        Enter your coupon code if you have one
                      </label>
                      <div className="input-group w-75 couponcode-wrap">
                        <input
                          type="text"
                          className="form-control me-2"
                          id="c_code"
                          placeholder="Coupon Code"
                          aria-label="Coupon Code"
                          aria-describedby="button-addon2"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-black btn-sm"
                            type="button"
                            id="button-addon2"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mb-5">
                  <div className="col-md-12">
                    <h2 className="h3 mb-3 text-black">Your Order</h2>
                    <div className="p-3 p-lg-5 border bg-white">
                      <table className="table site-block-order-table mb-5">
                        <thead>
                          <th>Product</th>
                          <th>Total</th>
                        </thead>
                        <tbody>
                          {filteredProducts.map((item) => (
                            <tr key={item.id}>
                              <td>
                                {item.name} <strong className="mx-2">x</strong>{" "}
                                1
                              </td>
                              <td>{item.price}đ</td>
                            </tr>
                          ))}

                          <tr>
                            <td className="text-black font-weight-bold">
                              <strong>Cart Subtotal</strong>
                            </td>
                            <td className="text-black">
                              {getTotalCartAmount()}đ
                            </td>
                          </tr>
                          <tr>
                            <td className="text-black font-weight-bold">
                              <strong>Order Total</strong>
                            </td>
                            <td className="text-black font-weight-bold">
                              <strong>{getTotalCartAmount()}đ</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <div className="form-group">
                        <button
                          className="btn btn-black btn-lg py-3 btn-block"
                          onClick={handleSubmit}
                        >
                          Place Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
