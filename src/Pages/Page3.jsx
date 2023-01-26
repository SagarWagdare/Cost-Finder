import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const Page3 = () => {
  const home = useSelector((e) => e.home.house);

  return (
    <>
      <section>
        <p className="text-center display-6">Your Total Estimate is ₹ 0</p>
        <div className="container d-flex ">
          <Card style={{ width: "50rem" }} className="mx-2 shadow border-0">
            <Card.Body>
              <p className="display-6 text-center">Room Wise Estimate</p>
             
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>

          <Card style={{ width: "50rem" }} className=" shadow mx-2 border-0">
            <Card.Body>
              <p className="display-6 text-center">Scope Wise Estimate</p>
              <Row>Living Room</Row>
               
                <Col>Master Bedroom</Col>
                <Col>1</Col>
                <Col>Master Bathroom</Col>
                <Col>1</Col>
            
            
                <Row>Kitchen</Row>
                <Col>1</Col>
              
            {home.map((item) => (

            <>
            
            <Col>{item.title}</Col>
                <Col>{item.number}</Col>
            </>
                
            
            ))}
            </Card.Body>
          </Card>
        </div>
      </section>

      <section>
        <div className="container d-flex ">
          <div className="container ">
          <Row>
                <Col>Living Room</Col>
                <Col>1</Col>
              </Row>
              <Row>
                <Col>Master Bedroom</Col>
                <Col>1</Col>
              </Row>
              <Row>
                <Col>Master Bathroom</Col>
                <Col>1</Col>
              </Row>
              <Row>
                <Col>Kitchen</Col>
                <Col>1</Col>
              </Row>
            {home.map((item) => (

              <Row>
                <Col>{item.title}</Col>
                <Col>{item.number}</Col>
              </Row>
            ))}
          </div>
          <div className="container">
            <Row>
              <Col>
                <span className="bg-danger text-danger">[+]</span>Flooring
              </Col>
              <Col>0</Col>
            </Row>
            <Row>
              <Col>
                <span className="bg-success text-success">[+]</span>Walls
              </Col>
              <Col>0</Col>
            </Row>
            <Row>
              <Col>
                <span className="bg-success text-success">[+]</span>Ceiling
              </Col>
              <Col>0</Col>
            </Row>
            <Row>
              <Col>
                <span className="bg-danger text-danger">[+]</span>Electricals
              </Col>
              <Col>0</Col>
            </Row>
            <Row>
              <Col>
                <span className="bg-success text-success">[+]</span>Windows
              </Col>
              <Col>0</Col>
            </Row>
            <Row>
              <Col>
                <span className="bg-success text-success">[+]</span>Doors
              </Col>
              <Col>0</Col>
            </Row>
            <Row>
              <Col>
                <span className="bg-primary text-primary">[+]</span>Furniture
              </Col>
              <Col>0</Col>
            </Row>
            <Row>
              <Col>
                <span className="bg-info text-info">[+]</span>Plumbing
              </Col>
              <Col>0</Col>
            </Row>
          </div>
        </div>
        <h3 className="text-muted text-center m-4">
          <i className="fa-solid fa-circle-exclamation"></i>Approx. 15% Amount
          may vary upon specific requirements or if special customization has to
          be made
        </h3>
      </section>

      <section>
        <div className="container py-3">
          <button className="btn btn-info p-3 d-flex mx-auto">
            Download Estimate{" "}
          </button>
        </div>
      </section>
    </>
  );
};

export default Page3;
