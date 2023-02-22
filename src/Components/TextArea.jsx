import React from "react";
import { Input } from "antd";

const { TextArea } = Input;

function TextArea(props) {
  const { icon, name, type } = props;

  let inputElement;

  if (type === "TextArea") {
    inputElement = <TextArea rows={4} name={name} placeholder={name} />;
  }

  return <div>{inputElement}</div>;
}

export default TextArea;


// imported part =>
// <Form.Item label="Username" >
//         <HorizontalTextInput name="username" type="TextArea" />
//       </Form.Item>
