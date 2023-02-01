import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import "./Page.css";

const Flooring = () => {
  const [FlooringImg, setFlooringImg] = useState(false);

  const Flooringonclick = () => {
    if (FlooringImg === false) {
      setFlooringImg(true);
    } else {
      setFlooringImg(false);
    }
  };

  const clickImg = ()=>{
    alert("hbh")
  }
  const floorImg = [
    {
      img: "http://costfinder.consdeployer.com/assets/productselection/livingroom/flooring/vitrified.png",
      title: "Vitrified Tiles",
      price: "1500",
      alt: "Vitrified Tiles",
    },

    {
      img: "http://costfinder.consdeployer.com/assets/productselection/livingroom/flooring/wooden.png",
      title: "Wooden Flooring",
      price: "2500",
      alt: "Wooden Flooring",
    },

    {
      img: "http://costfinder.consdeployer.com/assets/productselection/livingroom/flooring/italian.png",
      title: "Italian Marble",
      price: "3500",
      alt: "Italian Marble",
    },
  ];
  return (
    <Card className="p-2 m-2">
      {FlooringImg ? (
        <Row>
          <Col>
            <Form.Check.Input onClick={() => Flooringonclick()} />
            <Form.Check.Label>Flooring</Form.Check.Label>
          </Col>
          <Row>
            {floorImg.map((floors) => (
              <Col className=" column">
                <img
                  src={floors.img}
                  alt={floors.alt}
                  style={{ width: "110px", height: "110px" }}
                  onClick = {()=> clickImg()}
                />

                <p className="text-center font-monospace">{floors.title}</p>
              </Col>
            ))}
          </Row>
        </Row>
      ) : (
        <Col>
          <Form.Check.Input className="" onClick={() => Flooringonclick()} />
          <Form.Check.Label>Flooring</Form.Check.Label>        </Col>
      )}
    </Card>
  );
};

export default Flooring;
