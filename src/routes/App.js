import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import Login from "../pages/Login";
import Maritimo from "../pages/Maritimo";
import PrivateRoute from "../utils/PrivateRoute";
import Terrestre from "../pages/Terrestre";
import NotFound from "../pages/NotFound";


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
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
