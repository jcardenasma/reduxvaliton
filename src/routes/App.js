import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import Login from "../pages/Login";
import Maritimo from "../pages/Maritimo";
import PrivateRoute from "../utils/PrivateRoute";
import Terrestre from "../pages/Terrestre";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/maritimo">
          <Maritimo />
        </PrivateRoute>
        <PrivateRoute path="/terrestre">
          <Terrestre />
        </PrivateRoute>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
