import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearError,
  getProductDetails,
} from "../../redux/actions/productAction";
import Rating from "@mui/material/Rating";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import RelatedProducts from "../relatedProducts";
import { useNavigate, useParams } from "react-router-dom";
import ProductReview from "../productReview";
import Metadata from "../../layouts/titleLayout/metadata";
import MainLayout from "../../layouts/mainLayout";
import { addItemsToCart } from "../../redux/actions/cartActions";
import { ToastContainer, toast } from "react-toastify";
import "./index.css";
const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { product, loading, error } = useSelector(
    (state) => state.productDetail
  );
  const dispatch = useDispatch();
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    navigate("/myCart");
  };
  useEffect(() => {
    if (error) {
      dispatch(clearError());
    }
    dispatch(getProductDetails(id));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [dispatch, id]);
  return (
    <MainLayout>
      <Metadata title="productDetails page is working" />
      {!!loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="fa-3x">
            <i className="fas fa-spinner fa-pulse" />
          </div>
        </div>
      ) : (
        <>
          <div className="productsbackground pt-5">
            <p className="text-center h1 fw-bold pt-4 text-font ">
              **********PRODUCT DETAILS**********
            </p>
            <div className="container align-center pb-5 mt-5  rounded  ">
              <div className="row   bg-light rounded">
                <div className="col-lg-6 rounded  ">
                  <>
                    {/* Carousel wrapper */}
                    <div
                      id="carouselExampleIndicators"
                      className="carousel slide carousel-fade p-3 rounded"
                      data-mdb-ride="carousel"
                    >
                      {/* Slides */}
                      <div className="carousel-inner ">
                        <div className="carousel-item active">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(88).webp"
                            className="d-block "
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(121).webp"
                            className="d-block "
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(31).webp"
                            className="d-block "
                            alt="..."
                          />
                        </div>
                      </div>
                      {/* Slides */}
                      {/* Controls */}
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-mdb-target="#carouselExampleIndicators"
                        data-mdb-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-mdb-target="#carouselExampleIndicators"
                        data-mdb-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </>
                </div>
                {/* PRODUCT DETAILS DESCRIPTION  */}
                <div className="col-lg-6 h-auto mb-30 p-3">
                  <div className="h-100  p-30 ">
                    <h4 className="mb-4 h5 fw-bold ">
                      Name:{" "}
                      <span className="h5 text-descriptions fw-bold">
                        {product.name}
                      </span>
                    </h4>
                    <div className="d-flex mb-4 h5 fw-bold">
                      Rating: <Rating {...options} /> (
                      {` ${product.noOfReviews}`})
                    </div>
                    <h4 className="fw-bold h5 mb-4">
                      Price:{" "}
                      <span className="h5 text-descriptions fw-bold">
                        ₹{product.price}
                      </span>
                    </h4>
                    <p className="mb-4 h5 fw-bold ">
                      Description:{" "}
                      <span className="h5 text-descriptions fw-bold">
                        {product.description}
                      </span>
                    </p>

                    <p className="mb-4 h5 fw-bold">
                      Stock:{" "}
                      <span className="h5  text-descriptions fw-bold ">
                        {product.Stock}
                      </span>
                    </p>
                    <div className="d-flex align-items-center mb-4 pt-2 gap">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          setQuantity(quantity - 1);
                        }}
                        disabled={quantity <= 1}
                      >
                        -
                      </button>

                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="1"
                        max="5"
                        defaultValue={1}
                        value={quantity}
                      />
                      <button
                        className="btn btn-primary rounded"
                        onClick={() => {
                          setQuantity(quantity + 1);
                        }}
                        disabled={quantity >= product.Stock}
                      >
                        +
                      </button>
                    </div>
                    <div className="d-flex gap-1">
                      <button
                        className="btn btn-outline-dark rounded "
                        onClick={addToCartHandler}
                      >
                        <i className="fa fa-shopping-cart mr-1" /> Add To Cart
                      </button>
                      <button className="btn btn-outline-info ">
                        Submit Review
                      </button>
                    </div>
                    <div className="d-flex pt-2">
                      <strong className="text-dark mr-2">Share on:</strong>
                      <div className="d-inline-flex ">
                        <a className="text-dark px-2" href="">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a className="text-dark px-2" href="">
                          <i className="fab fa-twitter" />
                        </a>
                        <a className="text-dark px-2" href="">
                          <i className="fab fa-linkedin-in" />
                        </a>
                        <a className="text-dark px-2" href="">
                          <i className="fab fa-pinterest" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {!!product.reviews && <ProductReview reviews={product.reviews} />}
            <RelatedProducts />
          </div>
        </>
      )}
    </MainLayout>
  );
};

export default ProductDetails;
