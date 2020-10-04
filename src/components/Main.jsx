import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home/Home";
import JavaScript from "./Javascript";
import Regex from "./Regex";
import Questions from "./Questions";
import PageNotFound from "./PageNotFound";

const Main = () => (
  <main>
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route exact path="/home" component={Home} />
      <Route path="/javascript" component={JavaScript} />
      <Route path="/regex" component={Regex} />
      <Route path="/questions" component={Questions} />
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
