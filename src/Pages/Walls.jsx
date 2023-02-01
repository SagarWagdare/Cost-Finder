import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { wallsdesigningPrice } from "../redux/reducer";

const Walls = (roomID) => {

  const [allwallsImg, setAllWallsImg] = useState(false);
 
  const dispatch = useDispatch();

  const wallsonClick = () => {
    if (allwallsImg == false) {
      setAllWallsImg(true);
    } else {
      setAllWallsImg(false);
    }
  };

  

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
      {allwallsImg ? (
        <Row>
          <Col>
            <Form.Check.Input onClick={() => wallsonClick()} />
            <Form.Check.Label>Walls</Form.Check.Label>{" "}
          </Col>
          <Row>
            {wallsImg.map((walls,index) => (
              <Col key={index} className="px-3 column">
                <img
                  src={walls.img}
                  alt=""
                  style={{ width: "110px", height: "110px" }}
                  className="img"
                  onClick={()=>{
                    dispatch(wallsdesigningPrice({walls,roomID}))
                  }}
                />

                <p className="text-center font-monospace">{walls.title}</p>
              </Col>
            ))}
          </Row>
        </Row>
      ) : (
        <Col>
          <Form.Check.Input type="checkbox" onClick={() => wallsonClick()} />
          <Form.Check.Label>Walls</Form.Check.Label>
        </Col>
      )}
    </Card>
  );
};

export default Walls;
