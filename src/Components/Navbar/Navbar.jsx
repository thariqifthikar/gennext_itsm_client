import React, { children } from "react";
import "@fontsource/poppins";
import {
  AiFillHome,
  AiFillShopping,
  AiFillMessage,
  AiFillBell,
  AiFillSetting,
  AiOutlinePoweroff,
} from "react-icons/ai";
import { UserOutlined, SearchOutlined, WindowsFilled } from "@ant-design/icons";
import { Avatar, Space, Input } from "antd";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ children }) => {
  const logout = [
    {
      path: "/logout",
      name: "Logout",
      icon: <AiOutlinePoweroff />,
    },
  ];
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
            <Space direction="vertical" size={16}>
              <Space wrap size={16}>
                <Avatar
                  src="https://www.nicepng.com/png/detail/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png"
                  size={100}
                />
              </Space>
            </Space>
          </div>
          <h1 className="logo">Young Niko </h1>
        </div>
        <div className="search">
          <Input
            style={{ borderRadius: "25px" }}
            className="input_search"
            size="large"
            placeholder=" search"
            fontSize="18px"
            prefix={
              <SearchOutlined
                style={{
                  color: "#8133BE",
                  marginLeft: "10px",
                  fontSize: "16px",
                }}
              />
            }
          />
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}

        {logout.map((item, index) => (
          <Link to={item.path} key={index} className="linklogout">
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </Link>
        ))}
      </div>

      <main>{children}</main>
    </div>
  );
};

export default Navbar;
