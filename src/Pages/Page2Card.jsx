import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Flooring from "./Flooring";
import Walls from "./Walls";
// import { CustomizeRoom } from "./CustomizeRoom";

const Page2Card = ({ room, index, roomID, checkID }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      {room.id === checkID ? (
        <Card className="mb-4" id={room.id}>
          {isChecked ? (
            <Card.Body>
              <div>
                <Form.Check.Input
                  checked={isChecked}
                  onChange={() => {
                    setIsChecked(!isChecked);
                  }}
                />{" "}
                <Form.Check.Label>Enable {room.title}</Form.Check.Label>
              </div>

              <p className="text-muted ">
                How would you like to spend on this room?
              </p>

              <div className="d-flex">
                <Form.Check
                  type="radio"
                  id="basic"
                  aria-label="radio 1"
                  name="styles"
                  className="d-inline-flex mx-2 "
                />
                <Form.Check.Label>Basic</Form.Check.Label>

                <Form.Check
                  type="radio"
                  id="standard"
                  aria-label="radio 1"
                  name="styles"
                  className="d-inline-flex mx-2 "
                />
                <Form.Check.Label>Standard</Form.Check.Label>

                <Form.Check
                  type="radio"
                  id="lavish"
                  aria-label="radio 1"
                  name="styles"
                  className="d-inline-flex mx-2"
                />
                <Form.Check.Label>Lavish</Form.Check.Label>
              </div>

              <Flooring roomIndex={index} roomID={roomID} />
              <Walls />
            </Card.Body>
          ) : (
            <>
              <Card.Img variant="top" src={room.cover} />
              <Card.Body>
                <div>
                  <Form.Check.Input
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  />{" "}
                  <Form.Check.Label>Enable {room.title}</Form.Check.Label>
                </div>

                <p className="text-muted ">
                  How would you like to spend on this room?
                </p>
                <div className="d-flex">
                  <Form.Check
                    type="radio"
                    id="basic"
                    aria-label="radio 1"
                    name={index}
                    className="d-inline-flex mx-2 "
                  />
                  <Form.Check.Label>Basic</Form.Check.Label>

                  <Form.Check
                    type="radio"
                    id="standard"
                    aria-label="radio 1"
                    name={index}
                    className="d-inline-flex mx-2 "
                  />
                  <Form.Check.Label>Standard</Form.Check.Label>

                  <Form.Check
                    type="radio"
                    id="lavish"
                    aria-label="radio 1"
                    name={index}
                    className="d-inline-flex mx-2"
                  />
                  <Form.Check.Label>Lavish</Form.Check.Label>
                </div>
              </Card.Body>
            </>
          )}
        </Card>
      ) : null}
    </>
  );
};

export default Page2Card;
