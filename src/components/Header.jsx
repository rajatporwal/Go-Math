import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Button, Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  UserAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { SIDE_BAR } from "../actions/types";
import { showModal } from "../actions/commonActions";
import { logoutUser } from "../actions/authActions";
import Search from "../common/search/search";

const { Header } = Layout;


const HeaderComponent = ({ searchData }) => {
  const sideBar = useSelector((state) => state.appReducer.sideBar);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
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
        <Menu.Item key="home" className="add_margin">
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="javascript">
          <Link to="/javascript">JavaScript</Link>
        </Menu.Item>
        <Menu.Item key="react">
          <Link to="/react">React</Link>
        </Menu.Item>
        <Menu.Item key="quick">
          <Link to="/quick">Quick</Link>
        </Menu.Item>
        {/* <Menu.Item key="node">
          <Link to="/node">Node</Link>
        </Menu.Item> */}
        <Menu.Item key="next">
          <Link to="/next">Next JS</Link>
        </Menu.Item>
        {/* <Menu.Item key="reactnative">
          <Link to="/reactnative">React Native</Link>
        </Menu.Item> */}
        {/* <Menu.Item key="html">
          <Link to="/html">HTML</Link>
        </Menu.Item> */}
        {/* <Menu.Item key="css">
          <Link to="/css">CSS</Link>
        </Menu.Item> */}
        <Menu.Item key="typescript">
          <Link to="/typescript">Typescript</Link>
        </Menu.Item>
        {/* <Menu.Item key="ds">
          <Link to="/ds">DS</Link>
        </Menu.Item> */}
        <Menu.Item key="questions">
          <Link to="/questions">Questions</Link>
        </Menu.Item>
        {/* <Menu.Item key="6">
          <Link to="/regex">Regex</Link>
        </Menu.Item> */}
        {/* <Menu.Item key="7">
          <Link to="/conversion">Conversion</Link>
        </Menu.Item> */}
        {/* <Menu.Item key="system_design">
          <Link to="/system_design">System Design</Link>
        </Menu.Item> */}
        {/* <Menu.Item key="myapps">
          <Link to="/myapps">Apps</Link>
        </Menu.Item> */}
        {isAdmin && isAuthenticated && (
          <Menu.Item key="admin">
            <Link to="/admin">Admin</Link>
          </Menu.Item>
        )}
        {isAuthenticated && (
          <Menu.Item key="todo">
            <Link to="/todo">Todo</Link>
          </Menu.Item>
        )}
        <div key="login" style={{ float: "right", marginRight: "5rem" }}>
          <span style={{display: window.matchMedia('(min-width: 500px)').matches ? 'inline-block' : 'none' }}><Search searchData={searchData} /></span>
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

export default HeaderComponent;
