import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "antd/dist/antd.css";
import "./sass/main.scss";
import { Layout, Menu } from "antd";
const { Content, Sider } = Layout;
const { SubMenu } = Menu;

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  console.log("render");
  return (
    <Layout>
      <div className="App">
        <div>
          <Header setCollapsed={setCollapsed} collapsed={collapsed} />
        </div>
        <Layout>
          {collapsed ? (
            <Sider
              width={200}
              className="site-layout-background"
              style={{
                marginTop: 64,
                overflow: "auto",
                height: "100vh",
                position: "fixed",
                left: 0,
                zIndex: 1
              }}
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                <SubMenu key="sub1" title="subnav 1">
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title="subnav 2">
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title="subnav 3">
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
          ) : null}
          <div className="content">
            <Content className="site-layout" style={{ marginTop: 64 }}>
              <div className="site-layout-background" style={{ padding: 24 }}>
                <Main />
              </div>
            </Content>
          </div>
        </Layout>
        <div>
          <Footer />
        </div>
      </div>
    </Layout>
  );
}
