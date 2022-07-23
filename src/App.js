import React from "react";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { BackTop, Layout, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Footer from "./components/Footer/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import "./sass/main.scss";
import "antd/dist/antd.css";
import AuthModal from "./components/Auth/AuthModal";
import setAuthToken from "./utils/setAuthToken";
import { logoutUser, setCurrentUser } from "./actions/authActions";
import store from "./store";
import { getSearchData } from "./utils/search-options";
import SearchComponent from "./common/search/search";

const { Content } = Layout;

const antIcon = <LoadingOutlined style={{ fontSize: 24, zIndex: 1 }} spin />;
// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
  }
}

export default function App() {
  const showSideBar = useSelector((state) => state.appReducer.sideBar);
  const showModal = useSelector((state) => state.appReducer.showModal);
  const isLoading = useSelector((state) => state.appReducer.isLoading);
  const searchData = getSearchData();
  return (
    <Layout>
      <div className="App">
        <div>
          <Header searchData={searchData} />
        </div>
        <Layout>
          {showSideBar ? <SideBar /> : null}
          <div className={`content ${showSideBar ? "sideBar" : ""}`}>
            <Content className="site-layout" style={{ marginTop: 64 }}>
              <div style={{ display :  window.matchMedia("(min-width: 500px)").matches ? 'none' : 'flex', justifyContent: 'center', padding: '30px'}}>
                <SearchComponent searchData={searchData} />
              </div>
              <div className="site-layout-background" style={{ padding: 24 }}>
                <Spin indicator={antIcon} spinning={isLoading}>
                  <Main />
                </Spin>
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
