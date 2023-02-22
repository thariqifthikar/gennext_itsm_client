import React from "react";
import { Input } from "antd";


const { TextArea } = Input;

function TextAttachment(props) {
  const { icon, name, type } = props;

  let inputElement;

  if (type === "TextArea") {
    inputElement = <TextArea rows={4} name={name} placeholder={name} />;
  }

  return <div>{inputElement}</div>;
}

export default TextAttachment;