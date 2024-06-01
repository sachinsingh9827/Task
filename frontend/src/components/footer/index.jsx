import React from "react";
import "./index.css";
export default function Footer() {
  return (
    <div className="position-">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
      </head>

      <body>
        <div className="footer">
          <div className="inner-footer">
            <div className="footer-items">
              <h1 id="heading">E-Commerce</h1>
              <p>Description of any product or motto of the company.</p>
            </div>

            <div className="footer-items">
              <h3>Quick Links</h3>
              <div className="border1"></div>
              <ul>
                <a href="#">
                  <li>Home</li>
                </a>
                <a href="#">
                  <li>Search</li>
                </a>
                <a href="#">
                  <li>Contact</li>
                </a>
                <a href="#">
                  <li>About</li>
                </a>
              </ul>
            </div>

            <div className="footer-items">
              <h3>Category</h3>
              <div className="border1"></div>
              <ul>
                <a href="#">
                  <li>Furniture</li>
                </a>
                <a href="#">
                  <li>Clothing</li>
                </a>
                <a href="#">
                  <li>Food</li>
                </a>
                <a href="#">
                  <li>Electronics</li>
                </a>
              </ul>
            </div>

            <div className="footer-items">
              <h3>Contact us</h3>
              <div className="border1"></div>
              <ul>
                <li>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>near
                  Bhawarkua,Indore
                </li>
                <li>
                  <i className="fa fa-phone" aria-hidden="true"></i>9981303445
                </li>
                <li>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  xyz@gmail.com
                </li>
              </ul>

              <div className="social-media">
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fab fa-google-plus-square"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">Sachin 01-06-2024.</div>
        </div>
      </body>
    </div>
  );
}
