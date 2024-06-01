import React, { Fragment, useState } from "react";
import { Country, State } from "country-state-city";
import { useForm } from "react-hook-form";
import ReactCountryFlag from "react-country-flag";
import { MDBInput } from "mdb-react-ui-kit";
import "./index.css";
import CheckoutSteps from "../../components/checkOutSteps";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../../redux/actions/cartActions";
import Metadata from "../../layouts/titleLayout/metadata";
import { toast } from "react-toastify";
const Shipping = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { shippingInfo } = useSelector((state) => state.cart);
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      country: "",
      city: shippingInfo.city,
      state: "",
      address: shippingInfo.address,
      phone: shippingInfo.phone,
    },
  });
  const Submit = (values) => {
    dispatch(saveShippingInfo(values));
    toast.success("shipping info saved");
    navigate("/confirmOrder");
  };
  return (
    <Fragment>
      <Metadata title={"shipping"} />
      <div className="container my-5 py-5">
        <CheckoutSteps activeStep={0} />
        <section>
          <form onSubmit={handleSubmit(Submit)}>
            <div className="row">
              <div className="col-md-8 mb-4">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0 text-font text-uppercase">
                      Delivery address
                    </h5>
                  </div>
                  <div className="card-body">
                    <label htmlFor="country">Country</label>
                    <div className="row  mb-4">
                      <div className="col-md-1">
                        <ReactCountryFlag
                          countryCode={country}
                          svg
                          style={{
                            width: "2em",
                            height: "2em",
                          }}
                          title="US"
                        />
                      </div>
                      <div className="col-md-5">
                        <select
                          className="select"
                          name="country"
                          id="country"
                          required
                          value={country}
                          {...register("country", { required: true })}
                          onChange={(e) => setCountry(e.target.value)}
                        >
                          {Country &&
                            Country.getAllCountries().map((item) => (
                              <option key={item.isoCode} value={item.isoCode}>
                                {item.name}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div className="col-md-6 ">
                        {
                          <div>
                            <select
                              required
                              value={state}
                              id="State"
                              {...register("state", { required: true })}
                              onChange={(e) => setState(e.target.value)}
                            >
                              {State &&
                                State.getStatesOfCountry(country).map(
                                  (item) => (
                                    <option
                                      key={item.isoCode}
                                      value={item.isoCode}
                                    >
                                      {item.name}
                                    </option>
                                  )
                                )}
                            </select>
                          </div>
                        }
                      </div>
                    </div>
                    <div className="row mb-4  d-flex ">
                      <div className="col-md-6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="City"
                          size="lg"
                          id="form2"
                          type="text"
                          className="form-control form-control-lg"
                          {...register("city", { required: true })}
                        />
                      </div>
                      <div className="col">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Phone no."
                          size="lg"
                          id="form2"
                          type="number"
                          className=" form-control-lg"
                          {...register("phone", { required: true })}
                        />
                      </div>
                      <div className="col-md-6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Address"
                          size="lg"
                          id="form2"
                          type="text"
                          className="form-control form-control-lg"
                          {...register("address", { required: true })}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4 position-static">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0 text-font">
                      1 item{" "}
                      <span className="float-end mt-1" style={{ fontSize: 13 }}>
                        Edit
                      </span>
                    </h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                          className="rounded-3"
                          style={{ width: 100 }}
                          alt="Blue Jeans Jacket"
                        />
                      </div>
                      <div className="col-md-6 ms-3">
                        <span className="mb-0 text-price">$35.00</span>
                        <p className="mb-0 text-descriptions">Denim jacket </p>
                        <span className="text-descriptions fw-bold">
                          Black
                        </span>{" "}
                        <span className="text-descriptions fw-bold">UK 8</span>
                        <p className="text-descriptions mt-0">
                          Qty:
                          <span className="text-descriptions fw-bold">1</span>
                        </p>
                      </div>
                    </div>
                    <div className="card-footer mt-4">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 text-muted">
                          Subtotal
                          <span>$35.00</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0 fw-bold text-uppercase">
                          Total to pay
                          <span>$35.00</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-body">
                    <p className="text-uppercase fw-bold mb-3 text-font">
                      Email address
                    </p>
                    <div className="row">
                      <div className="col-md-4">
                        <p>{"Example@gmail.com"}</p>
                      </div>
                      <div className="col-md-7">
                        <button
                          type="button"
                          className="btn btn-outline-dark float-end button-color "
                          data-mdb-ripple-color="dark"
                        >
                          Change
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  {" "}
                  <button type="submit" className="btn btn-warning col-md-10">
                    Place order
                  </button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </Fragment>
  );
};

export default Shipping;
