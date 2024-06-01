import React, { useEffect } from "react";

import { clearError, getProducts } from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RelatedProducts = () => {
  const { products, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      dispatch(clearError());
    }
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5 p-3 text-font ">
        **********REALATED PRODUCTS**********{" "}
      </h1>
      <div className="row ">
        {products.map((value, index) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
              <Link to={`/productDetails/${value._id}`}>
                <div className="card">
                  <div
                    className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg"
                      className="w-100"
                    />
                    <a href="#!">
                      <div className="mask">
                        <div className="d-flex justify-content-start align-items-end h-100">
                          <h5>
                            <span
                              className={
                                value.Stock < 1
                                  ? "badge bg-danger ms-2"
                                  : "badge bg-primary ms-2"
                              }
                            >
                              {value.Stock}
                            </span>
                          </h5>
                        </div>
                      </div>
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="card-body">
                    <a href="" className="text-reset">
                      <h5 className="card-title mb-3">{value.name}</h5>
                    </a>
                    <a href="" className="text-reset">
                      <p>{value.category}</p>
                    </a>
                    <h6 className="mb-3">₹{value.price}</h6>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
