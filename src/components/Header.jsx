import React from "react";
import { Link } from "react-router-dom";
import javaScriptConfig from "../config/javaScriptConfig";
import { Layout, Menu } from "antd";
const { SubMenu } = Menu;

const { Header } = Layout;

export default () => {
  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/javascript">Javascript</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/regex">Regex</Link>
        </Menu.Item>
        <SubMenu key="SubMenu" title="JavaScript">
          {javaScriptConfig.map((js) => (
            <>
              <Menu.ItemGroup title={js.heading}>
                {js.children.map((child, i) => (
                  <Menu.Item key={`${js.heading} + "__ + ${i}`}>
                    <Link
                      to={{
                        pathname: "/javascript",
                        hash: child.id,
                        state: { fromDashboard: true }
                      }}
                    >
                      {child.title}
                    </Link>
                  </Menu.Item>
                ))}
              </Menu.ItemGroup>
            </>
          ))}
        </SubMenu>
      </Menu>
    </Header>
  );
};
