import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

const { Header } = Layout;

export default () => {
  const sideBar = useSelector((state) => state.sideBar);
  const showMenu = useSelector((state) => state.showMenu);
  const dispatch = useDispatch();
  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%", padding: 0 }}>
      <Menu theme="dark" mode="horizontal">
        {showMenu ? (
          <Menu.Item
            key="menuOutline"
            icon={<MenuUnfoldOutlined />}
            onClick={() => {
              dispatch({ type: "SIDE_BAR", value: !sideBar });
            }}
          />
        ) : null}
        <Menu.Item key="1" className={`${showMenu ? "" : "add_margin"}`}>
          <Link
            active
            to="/home"
            onClick={() => {
              dispatch({ type: "SHOW_MENU", value: false });
              dispatch({ type: "SHOW_SIDE_BAR", value: false });
            }}
          >
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link
            active
            to="/javascript"
            onClick={() => dispatch({ type: "SHOW_MENU", value: true })}
          >
            JavaScript
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link
            active
            to="/regex"
            onClick={() => dispatch({ type: "SHOW_MENU", value: true })}
          >
            Regex
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link
            active
            to="/questions"
            onClick={() => dispatch({ type: "SHOW_MENU", value: true })}
          >
            Questions
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
