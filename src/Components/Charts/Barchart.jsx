import React from "react";
import { Card } from "antd";
import { BarChart, Bar, XAxis } from "recharts";
const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
];
const Barchart = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "5px" }}>
      <Card
        title="Active Service Records by Category"
        headStyle={{ fontSize: "14px", height: "5px" }}
        style={{
          width: 500,
          height: 260,
          textAlign: "center",
          fontSize: "14px",
          fontSize: "14px",
        }}
      >
        <div style={{ height: "70%", position: "relative", }}>
          <BarChart width={350} height={150} data={data}>
            <XAxis dataKey="name" /> <Bar dataKey="uv" fill="#8884d8" />
          </BarChart>
        </div>
        <div style={{ height: "30%", textAlign: "center", marginTop: "5px" }}>
          <p className="details" style={{ marginBottom: "0px" }}>
            Other Details
          </p>
        </div>
      </Card>
    </div>
  );
};
export default Barchart;
