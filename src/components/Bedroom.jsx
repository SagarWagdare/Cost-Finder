import React from "react";
import { Card } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { bedroomDecrement, bedroomIncrement } from "../redux/reducer";

const Bedroom = () => {
  const dispatch = useDispatch();

  const bedroomQuantity = useSelector((el)=>el.home.bedroomQuantity);
  const bedroom = {
    image:
      "http://costfinder.consdeployer.com/assets/roomselection/bedroom.png",
    title: ` Bedroom ${bedroomQuantity + 1}`,
    number: "1",
  };
 
  return (
    <>
      <div className="mx-auto">
        <Row>
          <Card style={{ width: "500px" }} className="col mx-5 shadow">
            <Card.Body>
              <Card.Title>BEDROOMS</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Start with how many Bedrooms do you have?
              </Card.Subtitle>

              <InputGroup className="mb-3">
                <button
                  className="btn bg-primary"
                  onClick={() => {
                    dispatch(bedroomDecrement());
                    
                  }}
                >
                  -
                </button>
                <Form.Control placeholder={bedroomQuantity} />
                <button
                  className=" btn bg-primary"
                  onClick={() => {
                    dispatch(bedroomIncrement(bedroom));
                    
                  }}
                >
                  +
                </button>
              </InputGroup>
            </Card.Body>
          </Card>
        </Row>
      </div>
    </>
  );
};

export default Bedroom;
