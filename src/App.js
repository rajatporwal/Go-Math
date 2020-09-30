import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main";
import "antd/dist/antd.css";
import "./sass/main.scss";
import { Layout } from "antd";
const { Content } = Layout;

export default function App() {
  return (
    <Layout>
      <div className="App">
        <div>
          <Header />
        </div>
        <div className="content">
          <Content className="site-layout" style={{ marginTop: 64 }}>
            <div className="site-layout-background" style={{ padding: 24 }}>
              <Main />
            </div>
          </Content>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Layout>
  );
}
