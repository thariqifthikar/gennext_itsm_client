import React from 'react';
import { Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import "../HorizontalInput/Horizontal.css"

function HorizontalTextInput(props) {
  const { icon, name, type } = props;

  let inputElement;
  

  if (type === 'text') {
    inputElement = (
      <Input
        name={name}
        placeholder={name}
        prefix={ <UserOutlined /> }
        style={{ height: '40px'} }
       
        className="custom-input" // add class name for custom styles
      />
    );
  } else if (type === 'password') {
    inputElement = (
      <Input.Password
        name={name}
        placeholder={name}
        prefix={<LockOutlined />}
        style={{ height: '40px'} }
        className="custom-input" // add class name for custom styles
      />
    );
  } else if(type === 'email'){
    inputElement=(
      <Input
      name={name}
      placeholder={name}
      prefix = {<MailOutlined />}
      style={{ height: '40px'} }
      className="custom-input"
      />
    )
  }
  

  return <div>{inputElement}</div>;
}

export default HorizontalTextInput;