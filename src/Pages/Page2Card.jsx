import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Page2Card = () => {
    const [card, setCard] = useState(false);

  const clicked = () => {
    if (card === false) {
      setCard(true);
    } else {
      setCard(false);
      setShowImg(false)
    }
  };

  const [showImg,setShowImg] = useState(false);

  const flooringImg = ()=>{
       if(showImg===false){
    setShowImg(true);
       }

       else  {
        setShowImg(false);
       }
       
  }

  console.log(showImg);
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
                <i class="fa-solid fa-arrow-right px-3"></i>
                  <input type="checkbox" onClick={() => clicked()} active />
                  Enable Living Room
                  <i class="fa-solid fa-arrow-left px-3"></i>
                </Col>

                <h5 className="text-muted mx-3">
                <i className="fa-solid fa-person-circle-question p-2 text-success"></i>How would you like to spend on this room?
                </h5>
                <Row className="px-3">
                  <Col><input type="radio" /> Basic</Col>
                  <Col><input type="radio" />  Standard</Col>
                  <Col><input type="radio" />  Lavish</Col>
                </Row>

                <button className="btn btn-success btn-lg mx-auto  m-4 px-4 py-2">
                  Next
                </button>
              </Card>
            ) : (
              <Card className="shadow" style={{ width: "750px" }}>
                <Col className="text-center text-muted p-3">
                <i class="fa-solid fa-arrow-right px-3"></i>
                  <input type="checkbox" onClick={() => clicked()} active />
                  Disable Living Room
                  <i class="fa-solid fa-arrow-left px-3"></i>
                </Col>

                <h5 className="text-muted mx-3">
                <i className="fa-solid fa-person-circle-question p-2 text-success"></i>How would you like to spend on this room?
                </h5>
                <Row className="px-3">
                  <Col><input type="radio" />  Basic</Col>
                  <Col><input type="radio" />  Standard</Col>
                  <Col><input type="radio" />  Lavish</Col>

                  <div className=" p-4">
                    <div className="container-fluid p-1 border m-2">

                      <input type="checkbox" onClick={()=>flooringImg()}/> Flooring
                      
                      {
                        showImg ? <Row className='p-3'>
                          <Col>
                          <img src="http://costfinder.consdeployer.com/assets/productselection/livingroom/flooring/vitrified.png" alt="" 
                          style={{width:"200px",height:"200px"}}/>
                          </Col>
                          <Col>
                          <img src="http://costfinder.consdeployer.com/assets/productselection/livingroom/flooring/wooden.png" alt="" 
                          style={{width:"200px",height:"200px"}}/>
                          </Col>
                          <Col>
                          <img src="http://costfinder.consdeployer.com/assets/productselection/livingroom/flooring/italian.png" alt="" 
                          style={{width:"200px",height:"200px"}}/>
                          </Col>
                        </Row>
                        : null
                      }
                    </div>
                    <div className="container-fluid p-1 border m-2">
                      <input type="checkbox" /> Walls
                    </div>
                    <div className="container-fluid p-1 border m-2">
                      <input type="checkbox" /> Ceiling
                    </div>
                    <div className="container-fluid p-1 border m-2">
                      <input type="checkbox" /> Electricals
                    </div>
                    <div className="container-fluid p-1 border m-2">
                      <input type="checkbox" /> Windows
                    </div>
                    <div className="container-fluid p-1 border m-2">
                      <input type="checkbox" /> Doors
                    </div>
                    <div className="container-fluid p-1 border m-2">
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