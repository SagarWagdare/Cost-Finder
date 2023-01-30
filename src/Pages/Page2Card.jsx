import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Page2Card = () => {
    const [card, setCard] = useState(true);

  const clicked = () => {
    if (card == true) {
      setCard(false);
    } else {
      setCard(true);
    }
  };
  return (
    <div>
         <div className="col-lg-6 mb-5">
            {/* {arr.map((room, index) => {
              return <HomeCard key={index} room={room} />;
              
            })} */}

            {card ? (
              <Card className="shadow" style={{ width: "750px" }}>
                <img
                  src="http://costfinder.consdeployer.com/assets/productselection/livingroombg.jpg"
                  alt=""
                  className="p-4"
                />
                <Col className="text-center text-muted p-3">
                  <input type="checkbox" onClick={() => clicked()} />
                  Enable Living Room
                </Col>

                <h5 className="text-muted mx-3">
                  How would you like to spend on this room?
                </h5>
                <Row className="px-3">
                  <Col>Basic</Col>
                  <Col>Standard</Col>
                  <Col>Lavish</Col>
                </Row>

                <button className="btn btn-success btn-lg mx-auto  m-4 px-4 py-2">
                  Next
                </button>
              </Card>
            ) : (
              <Card className="shadow" style={{ width: "750px" }}>
                <Col className="text-center text-muted p-3">
                  <input type="checkbox" onClick={() => clicked()} />
                  Enable Living Room
                </Col>

                <h5 className="text-muted mx-3">
                  How would you like to spend on this room?
                </h5>
                <Row className="px-3">
                  <Col>Basic</Col>
                  <Col>Standard</Col>
                  <Col>Lavish</Col>

                  <div className=" p-4">
                    <div className="container-fluid p-1">
                      <input type="checkbox" /> Flooring
                    </div>
                    <div className="container-fluid p-1">
                      <input type="checkbox" /> Walls
                    </div>
                    <div className="container-fluid p-1">
                      <input type="checkbox" /> Ceiling
                    </div>
                    <div className="container-fluid p-1">
                      <input type="checkbox" /> Electricals
                    </div>
                    <div className="container-fluid p-1">
                      <input type="checkbox" /> Windows
                    </div>
                    <div className="container-fluid p-1">
                      <input type="checkbox" /> Doors
                    </div>
                    <div className="container-fluid p-1">
                      <input type="checkbox" /> Furniture
                    </div>
                  </div>
                </Row>

                <button className="btn btn-success btn-lg mx-auto  m-4 px-4 py-2">
                  Next
                </button>
              </Card>
            )}
          </div>

    </div>
  )
}

export default Page2Card