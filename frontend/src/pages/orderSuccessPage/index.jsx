import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./index.css";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="orderSuccess d-flex flex-column align-items-center">
      <CheckCircleIcon />

      <p>Your Order has been Placed successfully </p>
      <Link to="/me/orders">View Orders</Link>
    </div>
  );
};

export default OrderSuccess;
