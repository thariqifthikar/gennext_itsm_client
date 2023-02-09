import React, { useState } from "react";
import {
  AiFillHome,
  AiFillShopping,
  AiFillMessage,
  AiFillBell,
  AiFillSetting,
} from "react-icons/ai";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import { NavLink } from "react-router-dom";

const Navbar = ({children}) => {
  const [isOpen ,setOpen] = useState ()
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <AiFillHome />,
    },
    {
      path: "/servicedesk",
      name: "Servicedesk",
      icon: <AiFillShopping />,
    },
    {
      path: "/messages",
      name: "Messages",
      icon: <AiFillMessage />,
    },
    {
      path: "/notifications",
      name: "Notifications",
      icon: <AiFillBell />,
    },
    {
      path: "/mysettings",
      name: "My Settings",
      icon: <AiFillSetting />,
    },
  ];
  return (
    <div className="container">
      <div className="navbar">
        <div className="top_selection">
          
        
          <div className="bars">
          
            <Space  direction="vertical" size={16}>
              <Space wrap size={16}>
                <Avatar  size={40} icon={<UserOutlined />} />
                
              </Space>
            </Space>
          </div>
          <h1 className="logo">Username </h1>
        </div>
        {
          menuItem.map((item ,index) => (
            <NavLink to={item.path} key={index} className="link" activeclassName>
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.name}</div>

            </NavLink>
          )

          )
        }
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Navbar;
