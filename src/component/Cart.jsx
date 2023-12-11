import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const {removeFromCart,filteredProducts,getTotalCartAmount } = useContext(ShopContext);
  const handleSubmit = () => {
    console.log("handle submit");
  };
  const navigate = useNavigate();
  return (
    <div className="untree_co-section before-footer-section">
      <div className="container">
        <div className="row mb-5">
          <form className="col-md-12" onSubmit={handleSubmit()}>
            <div className="site-blocks-table">
              <table className="table">
                <thead>
                  <tr>
                    <th className="product-thumbnail">Image</th>
                    <th className="product-name">Product</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-total">Total</th>
                    <th className="product-remove">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((item) => (
                    <tr key={item.id}>
                      <td className="product-thumbnail">
                        <img
                          src={item.img_url.link}
                          alt="Image"
                          className="img-fluid"
                        />
                      </td>
                      <td className="product-name">
                        <h2 className="h5 text-black">{item.name}</h2>
                      </td>
                      <td>{item.price}đ</td>
                      <td>1</td>
                      <td>{item.price}đ</td>
                      <td onClick={()=>removeFromCart(item.id)}>
                        <a href="#" className="btn btn-black btn-sm">
                          X
                        </a>
                      </td>
                    </tr>
                  ))}
                  
                </tbody>
              </table>
            </div>
          </form>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="row mb-5">
              <div className="col-md-6">
                <button className="btn btn-outline-black btn-sm btn-block" onClick={()=>{navigate("/")}}>
                  Continue Shopping
                </button>
                
              </div>
            </div>
          </div>
          <div className="col-md-6 pl-5">
            <div className="row justify-content-end">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-12 text-right border-bottom mb-5">
                    <h3 className="text-black h4 text-uppercase">
                      Cart Totals
                    </h3>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <span className="text-black">Subtotal</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black">{getTotalCartAmount()} đ</strong>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <span className="text-black">Total</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black">{getTotalCartAmount()} đ</strong>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <button
                      className="btn btn-black btn-lg py-3 btn-block"
                      onClick={()=>{navigate("/checkout")}}
                    >
                      Proceed To Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
