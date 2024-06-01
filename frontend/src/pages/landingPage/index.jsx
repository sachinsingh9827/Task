import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import MainLayout from "../../layouts/mainLayout";
import { Link } from "react-router-dom";
import "./index.css";

import Products from "../Products";
import Metadata from "../../layouts/titleLayout/metadata";
import ProductCard2 from "../../components/cards/productCard2";
import { useDispatch, useSelector } from "react-redux";
import { clearError, getProducts } from "../../redux/actions/productAction";

export default function LandingPage() {
  const { products, loading, error } = useSelector((state) => state.products);
  const filterCategory = products.map((value) => value.category);
  const fiteredCatgoryName = [...new Set(filterCategory)];

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      dispatch(clearError());
    }
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <MainLayout>
      <Metadata title="Home page is working" />
      {/* LANDING PAGE */}
      <section id="home">
        <div className="home_page ">
          <div className="home_img ">
            <img src="https://i.postimg.cc/t403yfn9/home2.jpg" alt="img " />
          </div>
          <div className="home_txt ">
            <p className="collections ">SUMMER COLLECTION</p>
            <h2>
              FALL - WINTER
              <br />
              Collection 2023
            </h2>
            <div className="home_label ">
              <p>
                A specialist label creating luxury essentials. Ethically crafted
                <br />
                with an unwavering commitment to exceptional quality.
              </p>
            </div>
            <button className="bg-dark text-light">
              <Link to="/Menu">Shop Now</Link>
              <i className="bx bx-right-arrow-alt" />
            </button>
            <div className="home_social_icons">
              <a href="#">
                <i className="bx bxl-facebook" />
              </a>
              <a href="#">
                <i className="bx bxl-twitter" />
              </a>
              <a href="#">
                <i className="bx bxl-pinterest" />
              </a>
              <a href="#">
                <i className="bx bxl-instagram" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* CATEGORY CARDS */}
      <section id="collection ">
        <div className="collections container">
          {fiteredCatgoryName.map((value, index) => {
            return (
              <div className="content3">
                <img
                  src="https://i.postimg.cc/MHv7KJYp/access.webp"
                  alt="img"
                />
                <div className="img-content3">
                  <p>{value}</p>
                  <button>
                    <a href="#sellers">SHOP NOW</a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* FEATURED PRODUCT  */}
      <section id="sellers ">
        <div className=" container">
          <h2 className="mt-5 mb-3">Top Sales</h2>
          <div className="best-seller ">
            <div className="row">
              {products.map((value, index) => {
                return (
                  <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 " key={index}>
                    <ProductCard2 product={value} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* NEWS CARDS  */}
      <section id="news">
        <div className="news-heading">
          <p>LATEST NEWS</p>
          <h2>Fashion New Trends</h2>
        </div>
        <div className="l-news container">
          <div className="l-news1">
            <div className="news1-img">
              <img src="https://i.postimg.cc/2y6wbZCm/news1.jpg" alt="img" />
            </div>
            <div className="news1-conte">
              <div className="date-news1">
                <p>
                  <i className="bx bxs-calendar" /> 12 February 2022
                </p>
                <h4>What Curling Irons Are The Best Ones</h4>
                <a
                  href="https://www.vogue.com/article/best-curling-irons"
                  target="_blank"
                >
                  read more
                </a>
              </div>
            </div>
          </div>
          <div className="l-news2">
            <div className="news2-img">
              <img src="https://i.postimg.cc/9MXPK7RT/news2.jpg" alt="img" />
            </div>
            <div className="news2-conte">
              <div className="date-news2">
                <p>
                  <i className="bx bxs-calendar" /> 17 February 2022
                </p>
                <h4>The Health Benefits Of Sunglasses</h4>
                <a>read more</a>
              </div>
            </div>
          </div>
          <div className="l-news3">
            <div className="news3-img">
              <img src="https://i.postimg.cc/x1KKdRLM/news3.jpg" alt="img" />
            </div>
            <div className="news3-conte">
              <div className="date-news3">
                <p>
                  <i className="bx bxs-calendar" /> 26 February 202
                </p>
                <h4>Eternity Bands Do Last Forever</h4>
                <a>read more</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="splash">
        <div className="anim">
          <div id="loader">
            <svg version="1.1" width="60px" height="70px" viewBox="0 0 60 70">
              <defs>
                <filter id="f1" x={0} y={0}>
                  <feGaussianBlur in="SourceGraphic" stdDeviation={2} />
                </filter>
              </defs>
              <g id="airplane">
                <path
                  fill="#000"
                  d="M0.677,20.977l4.355,1.631c0.281,0.104,0.579,0.162,0.88,0.16l9.76-0.004L30.46,41.58c0.27,0.34,0.679,0.545,1.112,0.541
    h1.87c0.992,0,1.676-0.992,1.322-1.918l-6.643-17.439l6.914,0.002l6.038,6.037c0.265,0.266,0.624,0.412,0.999,0.418l1.013-0.004
    c1.004-0.002,1.684-1.012,1.312-1.938l-2.911-7.277l2.912-7.278c0.372-0.928-0.313-1.941-1.313-1.938h1.017
    c-0.375,0-0.732,0.15-0.996,0.414l-6.039,6.039h-6.915l6.646-17.443c0.354-0.926-0.33-1.916-1.321-1.914l-1.87-0.004
    c-0.439,0.004-0.843,0.203-1.112,0.543L15.677,17.24l-9.765-0.002c-0.3,0.002-0.597,0.055-0.879,0.16L0.678,19.03
    C-0.225,19.36-0.228,20.637,0.677,20.977z"
                  transform="translate(44,0) rotate(90 0 0)"
                />
              </g>
              <g id="shadow" transform="scale(.9)">
                <path
                  fill="#000"
                  fillOpacity="0.3"
                  d="M0.677,20.977l4.355,1.631c0.281,0.104,0.579,0.162,0.88,0.16l9.76-0.004L30.46,41.58c0.27,0.34,0.679,0.545,1.112,0.541
		h1.87c0.992,0,1.676-0.992,1.322-1.918l-6.643-17.439l6.914,0.002l6.038,6.037c0.265,0.266,0.624,0.412,0.999,0.418l1.013-0.004
		c1.004-0.002,1.684-1.012,1.312-1.938l-2.911-7.277l2.912-7.278c0.372-0.928-0.313-1.941-1.313-1.938h1.017
		c-0.375,0-0.732,0.15-0.996,0.414l-6.039,6.039h-6.915l6.646-17.443c0.354-0.926-0.33-1.916-1.321-1.914l-1.87-0.004
		c-0.439,0.004-0.843,0.203-1.112,0.543L15.677,17.24l-9.765-0.002c-0.3,0.002-0.597,0.055-0.879,0.16L0.678,19.03
		C-0.225,19.36-0.228,20.637,0.677,20.977z"
                  transform="translate(64,30) rotate(90 0 0)"
                  filter="url(#f1)"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
