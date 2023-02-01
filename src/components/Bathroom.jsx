import React from "react";
import { Card } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { bathroomDecrement, bathroomIncrement } from "../redux/reducer";
const Bathroom = () => {
  const dispatch = useDispatch();
     
  const bathroomQuantity = useSelector((el)=>el.home.bathroomQuantity);
 

  const bathroom = {
    image:
      "http://costfinder.consdeployer.com/assets/roomselection/bathroom.png",
    title: ` Bathroom ${bathroomQuantity + 1}`,
    number: "1",
  };

  return (
    <>
      <div className="mx-auto ">
        <div className="row">
          <Card style={{ width: "500px" }} className="col mx-5 shadow">
            <Card.Body>
              <Card.Title>BATHROOMS</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Start with how many Baathrooms do you have?
              </Card.Subtitle>
              <InputGroup className="mb-3">
                <button
                  className="btn bg-primary"
                  onClick={() => {
                    dispatch(bathroomDecrement());
                  }}
                >
                  -
                </button>
                <Form.Control placeholder={bathroomQuantity} />
                <button
                  className=" btn bg-primary"
                  onClick={() => {
                    dispatch(bathroomIncrement(bathroom));
                  }}
                >
                  +
                </button>
              </InputGroup>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Bathroom;
