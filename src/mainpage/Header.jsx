import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Col, Row } from "react-bootstrap";
import "./Header.css";
const Header = () => {
  return (
    <>
      <section>
        <Row>
          <Navbar
            variant="dark"
            className=" navbar d-flex justify-content-center"
          >
            <Navbar.Brand
              href="#home"
              className="font-weight-bold display-1 mx-4 "
            >
              <i className="fa-solid fa-house-circle-check fa-2x text-primary"></i>

              <h1 className=" head d-inline-block align-top mx-2  display-6">
                COST FINDER
              </h1>
              <i className="fa-solid fa-hand-holding-dollar  fa-2x text-primary"></i>
            </Navbar.Brand>
          </Navbar>
        </Row>
        {/* <Row>
          <div className="d-flex">
            <Col sm={2}>
              <span >
                <i className="fa-solid fa-1 fa-2x"></i>
              </span>
            </Col>
            <Col sm={2}>
              <span>
                <i className="fa-solid fa-2 fa-2x "></i>
              </span>
            </Col>
            <Col sm={2}>
              <span>
                <i className="fa-solid fa-3 fa-2x"></i>
              </span>
            </Col>
          </div>
        </Row> */}
      </section>
    </>
  );
};

export default Header;
