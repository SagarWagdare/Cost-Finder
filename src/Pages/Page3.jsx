import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Chart from "react-apexcharts";
import DownloadButton from "../DownloadEstimate/DownloadButton";
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
              <Chart
                type="donut"
                width={500}
                height={550}
                series={[60, 70, 80, 90]}
                options={{
                  labels: [
                    "Living Room",
                    "Master Bedroom",
                    "Master Bathroom",
                    "Kitchen",
                  ],
                }}
              ></Chart>
            </Card.Body>
          </Card>

          <Card style={{ width: "50rem" }} className=" shadow mx-2 border-0">
            <Card.Body>
              <p className="display-6 text-center">Scope Wise Estimate</p>

              {home.map((item, index) => (
                <>
                  {/* <Col key={index}>{item.title}</Col> */}

                  {/* <Chart
              type="donut"
              width={500}
              height={550}
              series={[45,67,89,34]}
              options={{
                
              }}>
{item.title}
       
              </Chart> */}
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
        <div className="container p-3 text-center">
          <DownloadButton />
        </div>
      </section>
    </>
  );
};

export default Page3;
