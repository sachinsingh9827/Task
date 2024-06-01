import React from "react";
import "../../../pages/landingPage/index.css";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
const ProductCard2 = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <div className=" text-dark text-center m-3 shadow mb-5">
      <img
        src="https://i.postimg.cc/QtjSDzPF/bs3.png"
        alt="img"
        className="img-fluid"
      />
      <div className=" mt-2">
        <p className="h5">{product.name}</p>
        <Rating {...options} /> <p>₹ {product.price}</p>
        <div className="buy-now">
          <Link to={`/productDetails/${product._id}`}>
            <button className="mb-3">More details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard2;
