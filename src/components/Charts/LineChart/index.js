import HighchartsReact from "highcharts-react-official";
import Highchart from 'highcharts';
import React, { useEffect, useState } from "react";

const LineChart = (props) => {
    const {data} = props;
    const [option, setOption] = useState({});

    useEffect(() => {
        
    })
  return (
    <>
      <HighchartsReact Highchart={Highchart} option={option}/>
    </>
  );
};

export default LineChart;
