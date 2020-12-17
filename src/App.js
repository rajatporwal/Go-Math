import React from "react";
import { useSelector } from "react-redux";
import { BackTop, Layout } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Footer from "./components/Footer/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import "./sass/main.scss";
import "antd/dist/antd.css";
import AuthModal from "./components/Auth/AuthModal";

const { Content } = Layout;

export default function App() {
  const showSideBar = useSelector((state) => state.appReducer.sideBar);
  const showModal = useSelector((state) => state.appReducer.showModal);

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
        {showModal && <AuthModal />}
      </div>
    </Layout>
  );
}
