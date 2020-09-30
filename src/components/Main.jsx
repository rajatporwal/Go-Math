import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home/Home";
import JavaScript from "./Javascript";
import PageNotFound from "./PageNotFound";

const Main = () => (
  <main>
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route exact path="/home" component={Home} />
      <Route exact path="/javascript" component={JavaScript} />
      <Route
        path="*"
        render={() => {
          return <PageNotFound />;
        }}
      />
    </Switch>
  </main>
);

export default Main;