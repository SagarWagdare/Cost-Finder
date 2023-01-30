import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import HomeCard from '../components/HomeCard';
import { setID } from '../redux/reducer';
import Flooring from './Flooring';
import Walls from './Walls';

const Page2Card = () => {
  const home = useSelector((e) => e.home.house);


  // const arr = home.filter((room, index) => {
  //   return room.id === setID ? <HomeCard key={index} room={room} /> : null;
  // });
    const [card, setCard] = useState(true);

  const clicked = () => {
    if (card === true) {
      setCard(false);
    } else {
      setCard(true);
      setFloorImg(false)
    }
  };

  const [floorImg,setFloorImg] = useState(false);

  const [showWallsImg,setShowWallsImg] = useState(false);

  const flooringImg = ()=>{
       if(floorImg===true){
    setFloorImg(false);
       }

       else  {
        setFloorImg(true);
       }
       
  }

  
  const wallsImg = ()=>{
    if(showWallsImg===false){
      setShowWallsImg(true);
    }

    else  {
      setShowWallsImg(false);
    }
    
}

  console.log(floorImg);
  return (
    <div>
         <div className="col-lg-6 mb-5">
          

            {card ? (
              <Card className="shadow" style={{ width: "750px" }}>
                 <Col className="text-center text-muted p-2">
                <i class="fa-solid fa-arrow-right px-3"></i>
                  <input type="checkbox" onClick={() => clicked()}  />
                  Enable Living Room
                  <i class="fa-solid fa-arrow-left px-3"></i>
                </Col>
                <img
                  src="http://costfinder.consdeployer.com/assets/productselection/livingroombg.jpg"
                  alt=""
                  className="p-3"
                />
                
                 {/* {
                  home.map((img)=>{
                     <img src={img.cover} alt="" />
                  })
                 } */}

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
                <Col className="text-center text-muted p-3 ">
                <i class="fa-solid fa-arrow-right px-2"></i>
                  <input type="checkbox" onClick={() => clicked()} active />
                  Uncheck Living Room
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
                    <div className="container-fluid p-1 border m-2 d-block">

                      <input type="checkbox" onClick={()=>flooringImg()}/> Flooring
                      
                      {
                        floorImg ?<Flooring/>
                        : null
                      }
                    </div>
                    <div className="container-fluid p-1 border m-2">
                      <input type="checkbox" onClick={()=>wallsImg()} /> Walls
                      {
                        showWallsImg ?<Walls/>
                        : null
                      }

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