import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../actions";

const auth = {
  isAuthenticated(token,props) {
    let cd = new Date();
    let ct = cd.getTime();
    if (Number(token) < Number(ct)) {
      props.logOut();
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
        auth.isAuthenticated(token,props) ? (
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

const mapDispathToProps = {
  logOut
};

export default connect(
  mapStateProps,
  mapDispathToProps
)(PrivateRoute);