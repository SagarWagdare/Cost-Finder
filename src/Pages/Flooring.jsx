import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { flooringPrice } from "../redux/reducer";
import "./Page.css";
import VitrifiedTiles from "../Images/vitrified (1).png";
import WoodenFlooring from "../Images/wooden.png" 
import Italianmarble from "../Images/italian.png"



const Flooring = ({ roomID }) => {
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
      img: VitrifiedTiles,
      title: "Vitrified Tiles",
      cost: 20000,
      alt: "Vitrified Tiles",
    },

    {
      img: WoodenFlooring,
      title: "Wooden Flooring",
      cost: 50000,
      alt: "Wooden Flooring",
    },

    {
      img: Italianmarble,
      title: "Italian Marble",
      cost: 65000,
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
            {floorImg.map((floors, index) => (
              <Col key={index} className=" column">
                <img
                  src={floors.img}
                  alt={floors.alt}
                  style={{ width: "110px", height: "110px" }}
                  onClick={() => {
                    dispatch(flooringPrice({ floors, roomID }));
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
