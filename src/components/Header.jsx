import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../actions";

import "../assets/styles/components/Header.css";

import logo from "../assets/static/valitoncorp_logo.png";

const Header = props => {
  const handleSubmit = event => {
    props.logOut();
  };

  const { loged } = props;
  if (loged.clave) {
    return (
      <header>
        <nav className="navbar navbar-expand-lg fixed-top">
          <a
            className="navbar-brand"
            href="http://valcal.appadministracion.com/"
          >
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
          >
            <span className="navbar-toggler-icon">
              <i className="fas fa-align-justify"></i>
            </span>
          </button>
          <div
            className=" collapse navbar-collapse justify-content-end"
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/maritimo">
                  MARITIMO
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/terrestre">
                  TERRESTRE
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/terrestre">
                  AEREO
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/terrestre">
                  FACTURAS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={handleSubmit} to="/">
                  SALIR
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  } else {
    return (
      <header>
        <nav className="navbar navbar-expand-lg fixed-top">
          <a
            className="navbar-brand"
            href="http://valcal.appadministracion.com/"
          >
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
          >
            <span className="navbar-toggler-icon">
              <i className="fas fa-align-justify"></i>
            </span>
          </button>
          <div
            className=" collapse navbar-collapse justify-content-end"
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="http://valcal.appadministracion.com/about.html"
                >
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="http://valcal.appadministracion.com/service.html"
                >
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="http://valcal.appadministracion.com/quote.html"
                >
                  QUOTE ME
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  TRACKING
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="http://valcal.appadministracion.com/contact.php"
                >
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
};

const mapStateToProps = state => {
  return {
    loged: state.loged,
    clave: state.clave
  };
};

const mapDispathToProps = {
  logOut
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Header);
