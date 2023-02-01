import React from 'react';
import Chart from "react-apexcharts";
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const RoomWiseEstimate = () => {
    const home = useSelector((e) => e.home.house);

  const titles = home.map((el) => el.title);

  const Flooring = home.map((el) => {
    let floorCost = 0;
    let wallCost = 0;
    if (el.floorCost !== undefined) {
      floorCost = el.floorCost;
    }
    if (el.wallCost !== undefined) {
      wallCost = el.wallCost;
    }
    return floorCost + wallCost;
  });



  return (
    <Card style={{ width: "50rem" }} className="mx-2 shadow border-0">
    <Card.Body>
      <p className="display-6 text-center">Room Wise Estimate</p>
      <Chart
        type="donut"
        width={500}
        height={550}
        series={Flooring}
        options={{
          labels: titles,
        }}
      ></Chart>
    </Card.Body>
  </Card>

  )
}

export default RoomWiseEstimate