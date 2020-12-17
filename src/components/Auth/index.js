import React from "react";
import { Tabs } from "antd";
import Login from "./Login";

const { TabPane } = Tabs;

const Auth = () => {
  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="Login" key="1">
        <Login isLoginForm={true} />
      </TabPane>
      <TabPane tab="Register" key="2">
        <Login isLoginForm={false} />
      </TabPane>
    </Tabs>
  );
};

export default Auth;
