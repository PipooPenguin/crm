import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Checkout = () => {
  const { PRODUCTS, addToCart, cartItems, filteredProducts,getTotalCartAmount } = useContext(
    ShopContext
  );

  return (
    <>
      <div class="untree_co-section">
        <div class="container">
          <div class="row">
            <div class="col-md-6 mb-5 mb-md-0">
              <h2 class="h3 mb-3 text-black">Billing Details</h2>
              <div class="p-3 p-lg-5 border bg-white">
                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_fname" class="text-black">
                      Name <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_fname"
                      name="c_fname"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_address" class="text-black">
                      Address <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_address"
                      name="c_address"
                      placeholder="Street address"
                    />
                  </div>
                </div>

                <div class="form-group row mb-5">
                  <div class="col-md-6">
                    <label for="c_email_address" class="text-black">
                      Email Address <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_email_address"
                      name="c_email_address"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="c_phone" class="text-black">
                      Phone <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_phone"
                      name="c_phone"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row mb-5">
                <div class="col-md-12">
                  <h2 class="h3 mb-3 text-black">Coupon Code</h2>
                  <div class="p-3 p-lg-5 border bg-white">
                    <label for="c_code" class="text-black mb-3">
                      Enter your coupon code if you have one
                    </label>
                    <div class="input-group w-75 couponcode-wrap">
                      <input
                        type="text"
                        class="form-control me-2"
                        id="c_code"
                        placeholder="Coupon Code"
                        aria-label="Coupon Code"
                        aria-describedby="button-addon2"
                      />
                      <div class="input-group-append">
                        <button
                          class="btn btn-black btn-sm"
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

              <div class="row mb-5">
                <div class="col-md-12">
                  <h2 class="h3 mb-3 text-black">Your Order</h2>
                  <div class="p-3 p-lg-5 border bg-white">
                    <table class="table site-block-order-table mb-5">
                      <thead>
                        <th>Product</th>
                        <th>Total</th>
                      </thead>
                      <tbody>
                        {filteredProducts.map((item) => (
                          <tr key={item.id}>
                            <td>
                              {item.name} <strong class="mx-2">x</strong> 1
                            </td>
                            <td>{item.price}đ</td>
                          </tr>
                        ))}

                        <tr>
                          <td class="text-black font-weight-bold">
                            <strong>Cart Subtotal</strong>
                          </td>
                          <td class="text-black">{getTotalCartAmount()}đ</td>
                        </tr>
                        <tr>
                          <td class="text-black font-weight-bold">
                            <strong>Order Total</strong>
                          </td>
                          <td class="text-black font-weight-bold">
                            <strong>{getTotalCartAmount()}đ</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div class="form-group">
                      <button
                        class="btn btn-black btn-lg py-3 btn-block"
                        onclick="window.location='thankyou.html'"
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
    </>
  );
};

export default Checkout;
