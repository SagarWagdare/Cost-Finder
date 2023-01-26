import React, { useState } from "react";
import { Card } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { bedroomDecrement, bedroomIncrement } from "../redux/reducer";

const Bedroom = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const bedroom = {
    image:
      "http://costfinder.consdeployer.com/assets/roomselection/bedroom.png",
    title: `Bedroom ${count + 1}`,
    number: "1",
  };
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      return count;
    }
  };
  return (
    <>
      <div className="mx-auto">
        <Row>
          <Card style={{ width: "500px" }} className="col mx-3">
            <Card.Body>
              <Card.Title>BEDROOMS</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Start with how many Bedrooms do you have?
              </Card.Subtitle>

              <InputGroup className="mb-3">
                <button
                  className="btn bg-primary"
                  onClick={() => {
                    dispatch(bedroomDecrement(count));
                    decrement();
                  }}
                >
                  -
                </button>
                <Form.Control value={count} />
                <button
                  className=" btn bg-primary"
                  onClick={() => {
                    dispatch(bedroomIncrement(bedroom));
                    increment();
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
