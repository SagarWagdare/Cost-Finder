import React from 'react';
import Chart from "react-apexcharts";
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const ScopeWiseEstimate = () => {
    const home = useSelector((e) => e.home.house);

  let floorPrice = 0,
  wallPrice = 0;
home.forEach((obj) => {
  if (obj.floorCost) floorPrice += obj.floorCost;
  if (obj.wallCost) wallPrice += obj.wallCost;
});

const customizationTitles = ["Flooring", "Walls"];

  return (

    <Card style={{ width: "50rem" }} className=" shadow mx-2 border-0">
    <Card.Body>
      <p className="display-6 text-center">Scope Wise Estimate</p>

     
        <Chart
        type="donut"
        width={500}
        height={550}
        series={[23,44]}
        options={{
            labels: customizationTitles,
          }}
      
      >
       
      </Chart>
     
     
    </Card.Body>
  </Card>
  )
}

export default ScopeWiseEstimate