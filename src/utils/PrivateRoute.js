import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const auth = {
  isAuthenticated(token) {
    let cd = new Date();
    let ct = cd.getTime();
    if (Number(token) < Number(ct)) {
      return false;
    } else {
      return true;
    }
  }
};

const PrivateRoute = ({ children, ...props }) => {
  const { token } = props;
  return (
    <Route
      {...props}
      render={({ location }) =>
        auth.isAuthenticated(token) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

const mapStateProps = state => {
  return {
    token: state.token
  };
};

export default connect(
  mapStateProps,
  null
)(PrivateRoute);