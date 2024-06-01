import React, { Fragment } from "react";
import Rating from "@mui/material/Rating";
import "./index.css";
import Metadata from "../../layouts/titleLayout/metadata";
const ProductReview = ({ reviews }) => {
  const options = {
    value: 6,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Fragment>
      <section className="gradient-custom">
        <div className="container ">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="text-center mb-4 pb-2">
                <h1 className="text-center p-5 text-font">
                  **********Reviews**********
                </h1>
              </div>
              <div className="card">
                <div className="card-body px-4 py-5">
                  {/* Carousel wrapper */}
                  <div
                    id="carouselDarkVariant"
                    className="carousel slide carousel-dark"
                    data-mdb-ride="carousel"
                  >
                    {/* Indicators */}
                    <div className="carousel-indicators mb-0">
                      <button
                        data-mdb-target="#carouselDarkVariant"
                        data-mdb-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      />
                      <button
                        data-mdb-target="#carouselDarkVariant"
                        data-mdb-slide-to={1}
                        aria-label="Slide 1"
                      />
                      <button
                        data-mdb-target="#carouselDarkVariant"
                        data-mdb-slide-to={2}
                        aria-label="Slide 1"
                      />
                    </div>
                    {/* Inner */}
                    <div className="carousel-inner pb-5">
                      {/* Single item */}
                      {reviews.length == 0 ? (
                        <h1 className="text-center pt-5 text-font">
                          NO REVIEWS YET ......
                        </h1>
                      ) : (
                        <>
                          {reviews.map((value, index) => {
                            return (
                              <div
                                className={
                                  index == 0
                                    ? "carousel-item active"
                                    : "carousel-item "
                                }
                              >
                                <div className="row d-flex justify-content-center">
                                  <div className="col-lg-10 col-xl-8">
                                    <div className="row">
                                      <div className="col-lg-4 d-flex justify-content-center">
                                        <img
                                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                          className="rounded-circle shadow-1 mb-4 mb-lg-0"
                                          alt="woman avatar"
                                          width={150}
                                          height={150}
                                        />
                                      </div>
                                      <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                        <h4 className="mb-4">{value.name}</h4>
                                        <p className="mb-0 pb-3">
                                          {value.comment}
                                        </p>
                                        <Rating {...options} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </>
                      )}
                    </div>
                    {/* Inner */}
                    {/* Controls */}
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-mdb-target="#carouselDarkVariant"
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
                      data-mdb-target="#carouselDarkVariant"
                      data-mdb-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                  {/* Carousel wrapper */}
                </div>
              </div>
              <div className="text-center mt-4 pt-2">
                <i className="fas fa-quote-right fa-3x text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ProductReview;
