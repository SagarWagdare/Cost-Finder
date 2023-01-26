import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const HomeCard = ({item}) => {
  return (
    <>
    
      <Card
              className="mx-auto shadow m-4"
              style={{ width: "700px" }}
            >
              <Row>
                <Col>
                  <img
                    src={item.image}
                    alt=""
                    style={{ width: "200px", height: "200px" }}
                    className="mx-5"
                  />
                </Col>
                <Col>
                  <h2 className="my-5">{item.title}</h2>
                </Col>
                <Col sm={2}>
                  <h2 className="my-5">{item.number}</h2>
                </Col>
              </Row>
            </Card>
            </>

    
  )
}

export default HomeCard