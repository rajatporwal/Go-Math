import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

const { Header } = Layout;

export default () => {
  const sideBar = useSelector((state) => state.sideBar);
  const dispatch = useDispatch();
  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%", padding: 0 }}>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item
          key="menuOutline"
          icon={<MenuUnfoldOutlined />}
          onClick={() => {
            dispatch({ type: "SIDE_BAR", value: !sideBar });
          }}
        />
        <Menu.Item key="1" className="add_margin">
          <Link active to="/home">
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link active to="/javascript">
            JavaScript
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link active to="/react">
            React
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link active to="/regex">
            Regex
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link active to="/questions">
            Questions
          </Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link active to="/conversion">
            Conversion
          </Link>
        </Menu.Item>
        <Menu.Item key="7">
          <Link active to="/ds">
            Data Structure
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
