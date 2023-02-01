import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { flooringPrice } from "../redux/reducer";
import "./Page.css";

const Flooring = ({
  roomID
}) => {


  const dispatch = useDispatch();
  const [FlooringImg, setFlooringImg] = useState(false);

  const Flooringonclick = () => {
    if (FlooringImg === false) {
      setFlooringImg(true);
    } else {
      setFlooringImg(false);
    }
  };

  
  const floorImg = [
    {
      img: "http://costfinder.consdeployer.com/assets/productselection/livingroom/flooring/vitrified.png",
      title: "Vitrified Tiles",
      cost: 1500,
      alt: "Vitrified Tiles",
    },

    {
      img: "http://costfinder.consdeployer.com/assets/productselection/livingroom/flooring/wooden.png",
      title: "Wooden Flooring",
      cost: 2500,
      alt: "Wooden Flooring",
    },

    {
      img: "http://costfinder.consdeployer.com/assets/productselection/livingroom/flooring/italian.png",
      title: "Italian Marble",
      cost: 3500,
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
            {floorImg.map((floors,index) => (
              <Col key={index} className=" column">
                <img
                  src={floors.img}
                  alt={floors.alt}
                  style={{ width: "110px", height: "110px" }}
                  onClick={() => {
                    dispatch(flooringPrice({floors,roomID}))
                  }}
                  className="img"
                
                />

                <p className="text-center font-monospace">{floors.title}</p>
              </Col>
            ))}
          </Row>
        </Row>
      ) : (
        <Col>
          <Form.Check.Input className="" onClick={() => Flooringonclick()} />
          <Form.Check.Label>Flooring</Form.Check.Label>{" "}
        </Col>
      )}
    </Card>
  );
};

export default Flooring;
