import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

const Walls = () => {
  const [allwallsImg, setAllWallsImg] = useState(false);

  const wallsonClick = () => {
    if (allwallsImg == false) {
      setAllWallsImg(true);
    } else {
      setAllWallsImg(false);
    }
  };

  const click = ()=>{
    alert("hi")
  }

  const wallsImg = [
    {
      img: "http://costfinder.consdeployer.com/assets/productselection/livingroom/walltreatment/painting.png",
      title: "Painting",
      price: "1500",
    },

    {
      img: "http://costfinder.consdeployer.com/assets/productselection/livingroom/walltreatment/paintingandwallputty.png",
      title: "Painting & Wall Putty",
      price: "2500",
    },

    {
      img: "http://costfinder.consdeployer.com/assets/productselection/livingroom/walltreatment/paintingwallputtywallpaper.png",
      title: "Painting ,Wall Putty & Wallpaper",
      price: "3500",
    },
  ];
  return (
    <Card className="p-2 m-2">
     {allwallsImg? <Row>
        <Col>
          <Form.Check.Input onClick={() => wallsonClick()} />
          <Form.Check.Label>Walls</Form.Check.Label>        </Col>
        <Row>
          {wallsImg.map((walls) => (
            <Col className="px-3 column">
              <img
                src={walls.img}
                alt=""
                style={{ width: "110px", height: "110px" }}
            
              />


              <p className="text-center font-monospace">{walls.title}</p>
            </Col>
          ))}
        </Row>
      </Row>:
       <Col>
       <Form.Check.Input type="checkbox" onClick={() => wallsonClick()} />
       <Form.Check.Label>Walls</Form.Check.Label> 

     </Col>}
    </Card>
  );
};

export default Walls;
