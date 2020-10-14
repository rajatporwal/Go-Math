import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import JavaScript from "./Javascript";
import Regex from "./Regex";
import Questions from "./Questions";
import PageNotFound from "./PageNotFound";
import Conversion from "./Conversion";

const Main = () => (
  <main>
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route exact path="/home" component={Home} />
      <Route exact path="/javascript" component={JavaScript} />
      <Route exact path="/regex" component={Regex} />
      <Route exact path="/questions" component={Questions} />
      <Route exact path="/conversion" component={Conversion} />
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
