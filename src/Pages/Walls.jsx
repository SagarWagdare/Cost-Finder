import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Walls = () => {
    const wallsImg  = [
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
        }
    ]
  return (
    <>
     <Row>
      {wallsImg.map((walls) => (
        <Col className="px-3">
          <img
            src={walls.img}
            alt=""
            style={{ width: "200px", height: "200px" }}
          />

          <p className="text-center font-monospace">{walls.title}</p>
          
        </Col>
      ))}
    </Row>
    
    
    </>
  )
}

export default Walls