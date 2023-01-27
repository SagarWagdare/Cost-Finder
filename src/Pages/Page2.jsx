import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./Page.css";
import { useSelector } from "react-redux";

const Page2 = () => {
  const home = useSelector((e) => e.home.house);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section className="my-5">
        <Row>
          <div className="col">
            <Card className="mx-4 p-5 border shadow" style={{ width: "400px" }}>
              <Row>
                <Col sm={8}>Living Room</Col>
                <Col sm={3}>
                  <Form>
                    <Form.Check type="switch" id="custom-switch" />
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col sm={8}>Master Bedroom</Col>
                <Col sm={3}>
                  <Form>
                    <Form.Check type="switch" id="custom-switch" />
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col sm={8}>Master Bathroom</Col>
                <Col sm={3}>
                  <Form>
                    <Form.Check type="switch" id="custom-switch" />
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col sm={8}>Kitchen</Col>
                <Col sm={3}>
                  <Form>
                    <Form.Check type="switch" id="custom-switch" />
                  </Form>
                </Col>
              </Row>
              {home.map((item,index) => (
                <Row key={index}>
                  <Col  sm={8}>{item.title}</Col>
                  <Col sm={3}>
                    {" "}
                    <Form>
                      <Form.Check type="switch" id="custom-switch" />
                    </Form>
                  </Col>
                </Row>
              ))}
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "600px" }} className="border-0 shadow">
              <Card.Img
                variant="top"
                src="http://costfinder.consdeployer.com/assets/productselection/bathroombg.jpg"
                className="p-3"
              />
              <Card.Body>
                <Container>
                  <div className="text-center">
                    <Form.Check.Input />
                    <Form.Check.Label>Enable Living Room</Form.Check.Label>
                  </div>
                </Container>
                <p className="text-muted ">
                  How would you like to spend on this room?
                </p>
                <Row>
                  <Col>
                    <Form.Check
                      type="radio"
                      aria-label="radio 1"
                      className="d-inline-flex mx-2 "
                    />
                    <Form.Check.Label>Basic</Form.Check.Label>
                  </Col>
                  <Col>
                    <Form.Check
                      type="radio"
                      aria-label="radio 1"
                      className="d-inline-flex mx-2 "
                    />
                    <Form.Check.Label>Standard</Form.Check.Label>
                  </Col>
                  <Col>
                    <Form.Check
                      type="radio"
                      aria-label="radio 1"
                      className="d-inline-flex mx-2"
                    />
                    <Form.Check.Label>Lavish</Form.Check.Label>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>

          {/* Redux Store Cards */}
          <div className="col">
            <Row>
              <Card
                style={{ width: "18rem" }}
                className="shadow-lg mx-auto border-0 bg-white rounded"
              >
                <Card.Body>
                  <h5 className="text-center">Net Estimate ₹ 0</h5>
                  <h6 className="text-muted text-center">
                    Estimate includes labour cost + material cost
                  </h6>
                </Card.Body>
                <div className="text-center">
                  <Link
                    to="/page3"
                    className="btn btn-success btn-lg  px-2 py-2 m-2"
                  >
                    Get Detailed Estimate<i className="fa-solid fa-database"></i>
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
                        <Nav.Link href="/home" className="my-2 text-primary">
                          <i className="fa-solid fa-align-justify"></i>Want us
                          to Fill the Form
                        </Nav.Link>
                        <Nav.Link
                          eventKey="link-1"
                          className="my-2  text-danger"
                        >
                          <i className="fa-solid fa-book-open-reader"></i>Read
                          about COST FINDER{" "}
                        </Nav.Link>
                        <Nav.Link
                          eventKey="link-2"
                          className="my-2  text-success"
                        >
                          <i className="fa-brands fa-whatsapp"></i>Reach us on
                          Whatsapp
                        </Nav.Link>
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
