import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";

import CheckoutSteps from "../../components/checkOutSteps";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Metadata from "../../layouts/titleLayout/metadata";

export default function ConfirmOrder() {
  const navigate = useNavigate();

  const { cartItems, shippingInfo } = useSelector((state) => state.cart);
  const subTotal = cartItems.reduce(
    (add, value) => add + value.quantity * value.price,
    0
  );
  const tax = subTotal * 0.18;
  const totalPrice = tax + subTotal;
  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.country}`;

  const proceedToPayment = () => {
    const data = {
      subTotal,
      tax,
      totalPrice,
    };
    sessionStorage.setItem("orderInfo", JSON.stringify(data));
    navigate("/payment");
  };
  return (
    <>
      <Metadata title={"confirm Order"} />
      <section
        className="h-100 gradient-custo"
        style={{ backgroundColor: "#eee" }}
      >
        <CheckoutSteps activeStep={1} />
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="10" xl="8">
              <MDBCard style={{ borderRadius: "10px" }}>
                <MDBCardHeader className="px-4 py-5">
                  <MDBTypography tag="h5" className="text-muted mb-0">
                    Thanks for your Order,{" "}
                    <span style={{ color: "#a8729a" }}>{"Example Name"}</span>!
                  </MDBTypography>
                </MDBCardHeader>
                <MDBCardBody className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <p
                      className="lead fw-normal mb-0"
                      style={{ color: "#a8729a" }}
                    >
                      Receipt
                    </p>
                    <p className="small text-muted mb-0">
                      Receipt Voucher : 1KAU9-84UIL
                    </p>
                  </div>

                  {cartItems &&
                    cartItems.map((value, index) => {
                      return (
                        <MDBCard className="shadow-0 border mb-4">
                          <MDBCardBody>
                            <MDBRow>
                              <MDBCol md="2">
                                <MDBCardImage
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                  fluid
                                  alt="Phone"
                                />
                              </MDBCol>
                              <MDBCol
                                md="2"
                                className="text-center d-flex justify-content-center align-items-center"
                              >
                                <p className="text-muted mb-0">{value.name}</p>
                              </MDBCol>
                              <MDBCol
                                md="2"
                                className="text-center d-flex justify-content-center align-items-center"
                              >
                                <p className="text-muted mb-0 small">White</p>
                              </MDBCol>
                              <MDBCol
                                md="2"
                                className="text-center d-flex justify-content-center align-items-center"
                              >
                                <p className="text-muted mb-0 small">
                                  Capacity: 64GB
                                </p>
                              </MDBCol>
                              <MDBCol
                                md="2"
                                className="text-center d-flex justify-content-center align-items-center"
                              >
                                <p className="text-muted mb-0 small">
                                  Qty: {value.quantity}
                                </p>
                              </MDBCol>
                              <MDBCol
                                md="2"
                                className="text-center d-flex justify-content-center align-items-center"
                              >
                                <p className="text-muted mb-0 small">
                                  ₹{value.price * value.quantity}
                                </p>
                              </MDBCol>
                            </MDBRow>
                            <hr
                              className="mb-4"
                              style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                            />
                          </MDBCardBody>
                        </MDBCard>
                      );
                    })}

                  <div className="d-flex justify-content-between pt-2">
                    <p className="fw-bold mb-0">Order Details</p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">subTotal</span> ₹{subTotal}
                    </p>
                  </div>

                  <div className="d-flex justify-content-between pt-2">
                    <p className="text-muted mb-0">Name : {"Example Name"}</p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Discount</span> $19.00
                    </p>
                  </div>

                  <div className="d-flex justify-content-between">
                    <p className="text-muted mb-0">
                      Phone : {shippingInfo.phone}
                    </p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">GST 0.8%</span> {tax}
                    </p>
                  </div>

                  <div className="d-flex justify-content-between mb-5">
                    <p className="text-muted mb-0">Address : {address}</p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Delivery Charges</span>{" "}
                      Free
                    </p>
                  </div>
                </MDBCardBody>
                <button
                  className="btn btn-warning w-80 m-4 p-3 text-font"
                  onClick={() => proceedToPayment()}
                >
                  PAYMENT
                </button>
                <MDBCardFooter
                  className="border-0 px-4 py-5"
                  style={{
                    backgroundColor: "#a8729a",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                >
                  <MDBTypography
                    tag="h5"
                    className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
                  >
                    Total paid:{" "}
                    <span className="h2 mb-0 ms-2">₹{totalPrice}</span>
                  </MDBTypography>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}
