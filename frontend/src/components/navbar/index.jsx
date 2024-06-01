import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

import UserOptions from "./userOptions";
function Navbar1() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      className="p-3"
      sticky="top"
    >
      <Container>
        <Navbar.Brand id="heading">
          E-Commerce <span className="text-danger ">.</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav "
          style={{ border: "2px solid black", textDecorationColor: "black" }}
        />
        <Navbar.Collapse id="responsive-navbar-nav bg-dark">
          <Nav className="me-auto ">
            <Nav.Link>
              <Link to="/" className="text-dark">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/products" className="text-dark">
                Products
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <div className="d-flex  mb-5">
              <UserOptions />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
