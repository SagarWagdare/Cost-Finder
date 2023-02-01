import React from "react";
import "./Page.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useSelector } from "react-redux";

// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Bathroom from "../components/Bathroom";
import Bedroom from "../components/Bedroom";
import HomeCard from "../components/HomeCard";
import { Col, Row } from "react-bootstrap";
const Page1 = () => {
  // const navigate = useNavigate();

  const home = useSelector((e) => e.home.house);
  const carpetArea = useSelector((e) => e.home.carpetArea);

  return (
    <>
      {/* Budget Your Spend */}
      <section>
        <div className="page1 text-center my-5">
          <h1 className="display-4 ">Budget your Spend</h1>
          <p>
            CostFinder helps you figure out your average spend based on the
            elements you like in your space
          </p>
        </div>
      </section>
      {/* Bathroom Component */}
      <Row className="p-5">
        <Col>
          {" "}
          <Bedroom />
        </Col>
        <Col>
          {" "}
          <Bathroom />
        </Col>
      </Row>

      {/* Bedroom Component */}

      {/* Carpet Area square */}
      <section>
        <div className="container">
          <Card style={{ width: "600px" }} className="mx-auto carpetArea-card">
            <Card.Img
              variant="top"
              src="https://www.homebazaar.com/knowledge/wp-content/uploads/2021/06/Built-up-area.jpg"
              style={{ width: "600px" ,height:"250px"}}
            />
            <Card.Body>
              <Card.Title className="text-center display-5">
                Carpet Area
              </Card.Title>
              <Card.Text className="text-muted">
                The area of an apartment that can be covered by a carpet or the
                net usable area is known as the carpet area.
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted text-center display-6">
                Assumed Carpet Area (Sq. ft.)=
                <span className=" d-block text-danger bg-light">{carpetArea} sq.ft</span>
              </Card.Subtitle>
              <Card.Subtitle className="mb-4 text-muted text-center display-6 my-5">
                Please enter your Carpet Area (Sq. ft.){" "}
              </Card.Subtitle>
              <InputGroup
                className="m-auto"
                style={{ width: "200px", height: "50px" }}
              >
                <Form.Control type="number" required />
                <InputGroup.Text>.sq .ft</InputGroup.Text>
              </InputGroup>
              <p className="text-center text-danger"></p>
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* Assumed Configuration */}
      <section>
        <h1 className="text-center mt-5 mb-3 ">Assumed Configuration</h1>
        <div className=" container">


          {/* Home Cards */}
          {home.map((item, index) => (
            <HomeCard key={index} item={item} />
          ))}
        </div>
      </section>

      {/* Next Button */}
      <section>
        <div className="text-center">
          <Link to="/page2" className="btn btn-primary   px-5 py-3 m-3">
            Next &#8594;
          </Link>
        </div>
      </section>
    </>
  );
};

export default Page1;
