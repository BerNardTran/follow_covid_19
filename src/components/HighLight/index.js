import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import HighLightCard from "./HighLightCard";

const HighLight = (props) => {
  const { report } = props;
  const data = report && report.length ? report[report.length - 1] : [];
  const summary = [
    {
      title: "Số ca nhiễm",
      count: data.Confirmed,
      type: "confirmed",
    },
    {
      title: "Số hồi phục",
      count: data.Recovered,
      type: "recovered",
    },
    {
      title: "Số ca nhiễm",
      count: data.Deaths,
      type: "death",
    },
  ];
  return (
    <>
      <Grid container spacing={3}>
        {summary.map((item) => (
          <Grid item sm={4} xs={12}>
            <HighLightCard
              title={item.title}
              count={item.count}
              type={item.type}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HighLight;
