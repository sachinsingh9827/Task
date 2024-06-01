import Rating from "@mui/material/Rating";

export default function Card({ product }) {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <div className="card">
      <div className="d-flex justify-content-between p-3">
        <p className="lead mb-0">Today's Combo Offer</p>
        <div
          className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
          style={{ width: 35, height: 35 }}
        >
          <p className="text-white mb-0 small">x4</p>
        </div>
      </div>
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
        className="card-img-top"
        alt="Laptop"
      />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <p className="small">
            <a href="#!" className="text-muted">
              {product.category}
            </a>
          </p>
          <p className="small text-danger">
            <s>${product.price}</s>
          </p>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <h5 className="mb-0">{product.name}</h5>
          <h5 className="text-dark mb-0">${product.price}</h5>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <p className="text-muted mb-0">
            Available: <span className="fw-bold">{product.Stock}</span>
          </p>
          <div className="ms-auto text-warning">
            <div>
              <Rating {...options} />{" "}
              <span className="productCardSpan">
                {" "}
                ({product.reviews.length} Reviews)
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-start mt-3">
          <button className="btn btn-primary  ">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
