import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Footer from "./components/Footer/Footer";
import Main from "./components/Main";
import "antd/dist/antd.css";
import "./sass/main.scss";
import { Layout } from "antd";
import { BackTop } from "antd";
import { useSelector } from "react-redux";
import SideBar from "./components/SideBar";
const { Content } = Layout;

export default function App() {
  const showSideBar = useSelector((state) => state.sideBar);
  return (
    <Layout>
      <div className="App">
        <div>
          <Header />
        </div>
        <Layout>
          {showSideBar ? <SideBar /> : null}
          <div className={`content ${showSideBar ? "sideBar" : ""}`}>
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
        <BackTop />
      </div>
    </Layout>
  );
}
