import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Button, Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  UserAddOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { SIDE_BAR } from "../actions/types";
import { showModal } from "../actions/commonActions";
import { logoutUser } from "../actions/authActions";

const { Header } = Layout;

export default () => {
  const sideBar = useSelector((state) => state.appReducer.sideBar);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%", padding: 0 }}>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item
          key="menuOutline"
          icon={<MenuUnfoldOutlined />}
          onClick={() => {
            dispatch({ type: SIDE_BAR, value: !sideBar });
          }}
        />
        <Menu.Item key="1" className="add_margin">
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/javascript">JavaScript</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/react">React</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/ds">DS</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/questions">Questions</Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to="/regex">Regex</Link>
        </Menu.Item>
        <Menu.Item key="7">
          <Link to="/conversion">Conversion</Link>
        </Menu.Item>
        {isAuthenticated && (
          <Menu.Item key="todo">
            <Link to="/todo">Todo</Link>
          </Menu.Item>
        )}
        <div key="login" style={{ float: "right", marginRight: "5rem" }}>
          {isAuthenticated ? (
            <Button
              type="danger"
              onClick={() => {
                dispatch(logoutUser());
              }}
            >
              Logout
              <LogoutOutlined />
            </Button>
          ) : (
            <Button
              type="primary"
              onClick={() => {
                dispatch(showModal(true));
              }}
            >
              Login
              <UserAddOutlined />
            </Button>
          )}
        </div>
      </Menu>
    </Header>
  );
};
