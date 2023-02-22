import React, { Component } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { Card } from "antd";

class Piechart extends Component {
  render() {
    const data2 = this.props.data;
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
    return (
      <div style={{ display: "flex", justifyContent: "center", margin: "5px" }}>
        <Card
          title="Open Incidents/Services Request by services"
          headStyle={{ fontSize: "14px", height: "5px" }}
          style={{
            width: 500,
            height: 260,
            textAlign: "center",
            fontSize: "14px",
            fontSize: "14px",
          }}
        >
          <div style={{ height: "70%", position: "relative" }}>
            <PieChart width={350} height={150}>
              <Pie
                data={data2}
                cx={200}
                cy={50}
                outerRadius={45}
                fill="#8884d8"
                label
              >
                {data2.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </div>
          <div style={{ height: "30%", textAlign: "center", marginTop: "5px" }}>
            <p className="details" style={{ marginBottom: "0px" }}>
              Other Details
            </p>
          </div>
        </Card>
      </div>
    );
  }
}

export default Piechart;
