import React from "react";

import { Form, Input } from 'antd';
import { Row, Col } from 'antd';
import { Card } from 'antd';

const Logout = () => {
  return (
    <div>
      {/* <h1>Logging out</h1>
      <Card title="Example Card" style={{ width: 300 }}>
      <p>Card content goes here.</p>
    </Card> */}
     
    
      <Form labelCol={{ span: 4 }} wrapperCol={{ span: 8 }} vertical={true} labelAlign="left">
        <Form.Item label="My Label">
          <br />
          <Input />
        </Form.Item>
      </Form>
    </div>
    
    
  );
};

export default Logout;
