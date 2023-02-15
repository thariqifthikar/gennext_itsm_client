import React from "react";
import { WarningOutlined, PlusCircleOutlined } from "@ant-design/icons";

import DynamicButton from "../../../Component/Buttons/DynamicButton";

const Servicedesk = () => {
  return (
    <div className="top_panel">
      <h1 style={{ margin: "0" }}>Servicedesk</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <DynamicButton
  icon={<WarningOutlined />}
  text="Submit an incident"
  backgroundColor={"#8133BE"}
  borderStyle={"none"}
  fontColor={"white"}
  hoverStyle={{ backgroundColor: "purple" ,cursor: "pointer" }} // add hover style here
  style={{
    borderRadius: "15px",
    backgroundColor: "#8133BE",
    position: "absolute",
    top: "20px",
    right: "20px",
    marginRight: "160px"
    
  }}
/>

<DynamicButton
  icon={<PlusCircleOutlined />}
  text="Submit a request"
  backgroundColor={"#8133BE"}
  borderStyle={"none"}
  fontColor={"white"}
  hoverStyle={{ backgroundColor: "blue" }} // add hover style here
  style={{
    borderRadius: "15px",
    position: "absolute",
    top: "20px",
    right: "20px",
    marginRight: "0px"
  }}
/>
      </div>
    </div>
  );
};

export default Servicedesk;
