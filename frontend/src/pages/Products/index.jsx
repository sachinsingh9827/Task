import React, { useEffect, useState } from "react";
import MainLayout from "../../layouts/mainLayout";
import Pagination from "react-js-pagination";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearError, getProducts } from "../../redux/actions/productAction";
import ProductCard2 from "../../components/cards/productCard2";
import Metadata from "../../layouts/titleLayout/metadata";

const categories = [
  "laptops",
  "Electronics",
  "Furniture",
  "Footware",
  "Clothes",
];
const prices = [
  "0-1000",
  "1000-5000",
  "5000-10000",
  "10000-50000",
  "above 50000",
];
export default function Products({ Products }) {
  const { products, loading, error, resultPerPage, productsCount } =
    useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getProducts(keyword.trim()));
  };

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  useEffect(() => {
    if (error) {
      dispatch(clearError());
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    dispatch(getProducts(keyword, currentPage, category));
  }, [dispatch, currentPage, category]);

  return (
    <>
      <MainLayout>
        <Metadata title="Products page is working" />
        {!!loading ? (
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="fa-3x">
              <i className="fas fa-spinner fa-pulse" />
            </div>
          </div>
        ) : (
          <>
            <div className="container">
              <h1 className="text-center fw-bold mt-5" id="heading">
                Featured Products
              </h1>
            </div>
            <div className="container">
              <div className="input-group col-sm-7  input-group-lg justify-content-center">
                <form
                  onSubmit={handleSearch}
                  className="d-flex  m-5 align-itmes-center"
                >
                  <input
                    type="text"
                    id="form3Example3c"
                    className="form-control rounded "
                    placeholder="What are you looking for?"
                    onChange={(e) => setKeyword(e.target.value)}
                    style={{ height: "50px" }}
                  />
                  <button type="submit " className="searchButton">
                    <i className="fa fa-search " />
                  </button>
                </form>
              </div>
            </div>
            {/* Shop Start */}
            <div className="container-fluid">
              <div className="row px-xl-5">
                {/* Shop Sidebar Start */}
                <div className="col-lg-3 col-md-4 ">
                  {/* Price Start */}
                  <h5 className="section-title position-relative text-uppercase mb-3">
                    <span className="bg-secondary pr-3">
                      Filter by CATEGORY
                    </span>
                  </h5>
                  <div className="bg-light  mb-30">
                    {categories.map((value) => (
                      <li
                        value={value}
                        onClick={() => setCategory(value)}
                        className="categoryList "
                      >
                        {value}
                      </li>
                    ))}
                  </div>
                  <h5 className="section-title position-relative text-uppercase mb-3">
                    <span className="bg-secondary pr-3">Filter by price</span>
                  </h5>
                  <div className="bg-light  mb-30">
                    {prices.map((value) => (
                      <li
                        value={value}
                        onClick={() => setPrice(value)}
                        className="categoryList "
                      >
                        {value}
                      </li>
                    ))}
                  </div>
                  <h5 className="section-title position-relative text-uppercase mb-3">
                    <span className="bg-secondary pr-3">Filter by Rating</span>
                  </h5>
                </div>

                <div className="col-lg-9 col-md-8 ">
                  <div className="row pb-3">
                    {products.map((value) => {
                      return (
                        <div className="col-lg-3 col-md-4 col-sm-6  pb-1 rounded seller">
                          <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden best-seller justify-content-center">
                              <Link to={`/productDetails/${value._id}`}>
                                <ProductCard2 product={value} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="paginationBox mt-5">
                      <Pagination
                        activePage={currentPage}
                        itemsCountPerPage={resultPerPage}
                        totalItemsCount={productsCount}
                        onChange={setCurrentPageNo}
                        nextPageText=">"
                        prevPageText="<"
                        firstPageText="1st"
                        lastPageText="Last"
                        itemClass="page-item"
                        linkClass="page-link"
                        activeClass="pageItemActive"
                        activeLinkClass="pageLinkActive"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </MainLayout>
    </>
  );
}
