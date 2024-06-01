import React, { useContext, useState } from "react";
import "./index.css";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import MainLayout from "../../layouts/mainLayout";
import Metadata from "../../layouts/titleLayout/metadata";
import { useDispatch, useSelector } from "react-redux";
import { removeItemsFromCart } from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let totalprice = cartItems.reduce(
    (total, items) => total + items.price * items.quantity,
    0
  );

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  return (
    <MainLayout>
      <Metadata title="Cart page is working" />
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />

          <p>No Product in Your Cart</p>
          <Link to="/products">View Products</Link>
        </div>
      ) : (
        <section className="h-100 gradient-customs">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Cart - 2 items</h5>
                  </div>
                  {!cartItems.length ? (
                    <h3 className="text-center">No Cart Found ...</h3>
                  ) : (
                    cartItems.map((value, index) => {
                      return (
                        <div className="card-body">
                          <hr className="my-4" />
                          <div className="row">
                            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                              <div
                                className="bg-image hover-overlay hover-zoom ripple rounded"
                                data-mdb-ripple-color="light"
                              >
                                <img
                                  src={value.image.url}
                                  className="w-100 h-50"
                                  alt="no img"
                                />

                                <div
                                  className="mask"
                                  style={{
                                    backgroundColor: "rgba(251, 251, 251, 0.2)",
                                  }}
                                ></div>
                              </div>
                            </div>

                            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                              <p>
                                <strong>{value.category}</strong>
                              </p>
                              <p>name: {value.name}</p>
                              <p>discription: {value.description}</p>

                              <button
                                type="button"
                                className="btn btn-primary btn-sm me-1 mb-2"
                                data-mdb-toggle="tooltip"
                                title="Remove item"
                                onClick={() => deleteCartItems(value.product)}
                              >
                                <i className="fas fa-trash"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger btn-sm mb-2"
                                data-mdb-toggle="tooltip"
                                title="Move to the wish list"
                              >
                                <i className="fas fa-heart"></i>
                              </button>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                              <div
                                className="d-flex mb-4"
                                style={{ maxWidth: "300px" }}
                              >
                                <button className="btn btn-primary">-</button>

                                <input
                                  type="number"
                                  id="quantity"
                                  name="quantity"
                                  min="1"
                                  max="5"
                                  value={value.quantity}
                                />
                                <button className="btn btn-primary rounded">
                                  +
                                </button>
                              </div>

                              <p className="text-start text-md-center">
                                <strong>
                                  Total Price:{value.price * value.quantity}{" "}
                                </strong>
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>

                <div className="card mb-4">
                  <div className="card-body">
                    <p>
                      <strong>Expected shipping delivery</strong>
                    </p>
                    <p className="mb-0">12.10.2020 - 14.10.2020</p>
                  </div>
                </div>
                <div className="card mb-4 mb-lg-0">
                  <div className="card-body">
                    <p>
                      <strong>We accept</strong>
                    </p>
                    <img
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                      alt="Visa"
                    />
                    <img
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                      alt="American Express"
                    />
                    <img
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                      alt="Mastercard"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products
                        <span>{"$500"}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>Gratis</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                          <strong>
                            <p className="mb-0">(including VAT)</p>
                          </strong>
                        </div>
                        <span>
                          <strong>₹{totalprice}/-</strong>
                        </span>
                      </li>
                    </ul>
                    <Link to={"/me/shipping"} className="text-light">
                      <button
                        type="button"
                        className="btn btn-primary btn-lg btn-block "
                      >
                        Go to checkout
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </MainLayout>
  );
}
