import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import HighMaps from "../Charts/HighMaps";
import LineChart from "../Charts/LineChart";

const Summary = (props) => {
  const {report, selectedContryId} = props;
  const [mapData, setMapData] = useState({});

  useEffect(()=> {
    if(selectedContryId){
      import(`@highcharts/map-collection/countries/${selectedContryId}/${selectedContryId}-all.geo.json`).then(res => setMapData(res));
    }
  }, [selectedContryId])
  return (
    <>
      <Grid container spacing={3}>
        <Grid item sm={8} xs={12}>
          <LineChart data={report}/>
        </Grid>
        <Grid item sm={4} xs={12}>
          <HighMaps mapData={mapData}/>
        </Grid>
      </Grid>
    </>
  );
};

export default Summary;
