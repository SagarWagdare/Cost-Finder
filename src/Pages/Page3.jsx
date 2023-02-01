import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import DownloadButton from "../DownloadEstimate/DownloadButton";
import ScopeWiseEstimate from "./ScopeWiseEstimate";
import RoomWiseEstimate from "./RoomWiseEstimate";
const Page3 = () => {
  const totalCost = useSelector((el) => el.home.totalCost);
  const home = useSelector((e) => e.home.house);


  return (
    <>
      <section>
        <p className="text-center display-6">
          Your Total Estimate is ₹ {totalCost}
        </p>
        <div className="container d-flex ">
         <RoomWiseEstimate/>
        <ScopeWiseEstimate/>
        </div>
      </section>

      <section>
        <div className="container d-flex ">
          <div className="container ">
            {home.map((item) => (
              <Row>
                <Col>{item.title}</Col>
                <Col>{item.number}</Col>
              </Row>
            ))}
          </div>
          <div className="container">
            
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
