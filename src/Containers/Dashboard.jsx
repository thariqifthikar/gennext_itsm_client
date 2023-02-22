import React from "react";
import Piechart from "../Components/Charts/Piechart";
import Linechart from "../Components/Charts/Linechart";
import Barchart from "../Components/Charts/Barchart";
import ActiveInactive from "../Components/ActiveInactive/ActiveInactive"
import { Row, Col } from "antd";
import "./Dashboard.css";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 600 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

function Dashboard() {
  return (
    <div>
      <Row gutter={[20, 20]}>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <Barchart />
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <Piechart data={data}/>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <Linechart />
        </Col>
      </Row>
      <Row gutter={[20, 20]}>
        <Col xs={{ span: 24 }}>
          <ActiveInactive />
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;