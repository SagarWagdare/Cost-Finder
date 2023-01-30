import React from "react";
import { Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const Flooring = () => {
  const floorImg = [
    {
      img: "http://costfinder.consdeployer.com/assets/productselection/livingroom/flooring/vitrified.png",
      title: "Vitrified Tiles",
      price: "1500",
    },

    {
      img: "http://costfinder.consdeployer.com/assets/productselection/livingroom/flooring/wooden.png",
      title: "Wooden Flooring",
      price: "2500",
    },

    {
      img: "http://costfinder.consdeployer.com/assets/productselection/livingroom/flooring/italian.png",
      title: "Italian Marble",
      price: "3500",
    },
  ];
  return (
    <Row>
      {floorImg.map((floors) => (
        <Col className="px-3">
          <img
            src={floors.img}
            alt=""
            style={{ width: "200px", height: "200px" }}
          />

          <p className="text-center font-monospace">{floors.title}</p>
          
        </Col>
      ))}
    </Row>
  );
};

export default Flooring;
