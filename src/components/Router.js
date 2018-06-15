import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import App from "./App";
import Category from "./Category";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/app" component={App} />
      <Route path="/category/:id" component={Category} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;