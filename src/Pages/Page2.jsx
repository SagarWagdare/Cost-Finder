import React, { useEffect } from "react";
import { Card, Col, NavLink, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./Page.css";
import { useDispatch, useSelector } from "react-redux";import { setID, totalExpense } from "../redux/reducer";
import Page2Card from "./Page2Card";

const Page2 = () => {
  const [isToggled, setisToggled] = useState(false);
  const [checkID, setCheckID] = useState("livingroom");
  const [show, setShow] = useState(false);
  const home = useSelector((el) => el.home.house);
  const totalCost = useSelector((el) => el.home.totalCost);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let floorPrice = 0,
    wallPrice = 0,
    totalPrice = 0;
  home.forEach((obj) => {
    if (obj.floorCost) floorPrice += obj.floorCost;
    if (obj.wallCost) wallPrice += obj.wallCost;
  });
  totalPrice = floorPrice + wallPrice;
  useEffect(() => {
    dispatch(setID());
    dispatch(totalExpense(totalPrice));
  }, [totalPrice,dispatch]);

  return (
    <>
      <section className="my-5">
        <Row className="mt-4 mx-3">
          <div className="col-lg-3  mb-5">
            <Card className="p-3 shadow border-0">
              {home.map((room, index) => {
                return (
                  <div key={index} className="d-flex justify-content-around">
                    <p className="mb-1 flex-grow-1">{room.title}</p>
                    <div className="form-check form-switch">
                      <input
                        checked={checkID === room.id}
                        className="form-check-input"
                        type="checkbox"
                        onChange={() => {
                          setCheckID(room.id);
                          setisToggled(!isToggled);
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </Card>
          </div>

          <Col>
            {home.map((room, index) => {
              return (
                <Page2Card
                  key={index}
                  room={room}
                  checkID={checkID}
                  index={index}
                  roomID={room.id}
                />
              );
            })}
          </Col>
          <div className="col">
            <Row>
              <Card
                style={{ width: "18rem" }}
                className="shadow-lg mx-auto border-0 bg-white rounded"
              >
                <Card.Body>
                  <h5 className="text-center">Net Estimate ₹ {totalCost}</h5>
                  <h6 className="text-muted text-center">
                    Estimate includes labour cost + material cost
                  </h6>
                </Card.Body>
                <div className="text-center">
                  <Link
                    to="/page3"
                    className="btn btn-success btn-lg  px-2 py-2 m-2"
                  >
                    Get Detailed Estimate
                    <i className="fa-solid fa-database"></i>
                  </Link>
                </div>
              </Card>
            </Row>
            <Row>
              <div className="container" style={{ width: "18rem" }}>
                <p className="my-2">
                  A variation upto + or - 15% could occur in cases where your
                  space has specific requirements not accounted in the
                  Costfinder. The CostFinder uses current optimised market rates
                  to budget your dream space.
                </p>
              </div>
            </Row>

            <Row>
              <img
                src="http://costfinder.consdeployer.com/assets/productselection/helpbulb.png"
                alt=""
                style={{ width: "10rem" }}
                className="mx-auto"
              />

              <div className="text-center">
                <Button
                  variant="primary"
                  onClick={handleShow}
                  className="btn btn-secondary btn-lg mx-auto px-4 py-2"
                >
                  Help
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <div className="container">
                      <h3 className="text-center">
                        Help<i className="fa-regular fa-circle-question"></i>
                      </h3>
                    </div>
                  </Modal.Header>
                  <Modal.Footer>
                    <div className="container">
                      <Nav.Item className="text-center ">
                        <NavLink href="/home" className="my-2 text-primary">
                          <i className="fa-solid fa-align-justify"></i>Want us
                          to Fill the Form
                        </NavLink>
                        <NavLink
                          eventKey="link-1"
                          className="my-2  text-danger"
                        >
                          <i className="fa-solid fa-book-open-reader"></i>Read
                          about COST FINDER{" "}
                        </NavLink>
                        <NavLink
                          eventKey="link-2"
                          className="my-2  text-success"
                        >
                          <i className="fa-brands fa-whatsapp"></i>Reach us on
                          Whatsapp
                        </NavLink>
                      </Nav.Item>
                    </div>
                  </Modal.Footer>
                </Modal>
              </div>
            </Row>
          </div>
        </Row>
      </section>
    </>
  );
};

export default Page2;
