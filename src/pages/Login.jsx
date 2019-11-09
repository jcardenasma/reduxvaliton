import React, { useState } from "react";
import { connect } from "react-redux";
import { sendLogin } from "../actions";
import "../assets/styles/components/Login.css";
import logo from "../assets/static/valitoncorp_logo.png";

const Login = props => {
  //Declarando estado del formulario
  const [form, setValues] = useState({
    username: "",
    password: "",
    cargando: false
  });

  const handleSubmit = event => {
    event.preventDefault();
    props.sendLogin('login', form, "/maritimo", props.history);
  };

  //Agregando informacion al formulario
  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const { backErrors } = props;

  return (
    <div className="container-fluid">
      <div className="contenedor">
        <div>
          <img src={logo} alt="Logo" />
          <hr />
          <form className="formulario" onSubmit={handleSubmit}>
            <div className="form-group">
              <i className="icono izquierda fa fa-user"></i>
              <input
                type="text"
                name="username"
                onChange={handleInput}
                placeholder="Usuario"
                required
              />
            </div>
            <div className="form-group">
              <i className="icono izquierda fa fa-lock"></i>
              <input
                type="password"
                name="password"
                onChange={handleInput}
                required
                placeholder="Contraseña"
              />
            </div>
            {backErrors.name && (
              <div
                className="alert alert-danger"
                style={{ textAlign: "center" }}
                role="alert"
              >
                Usuario y/o contraseña incorrectas
              </div>
            )}
            <hr />
            <div className="botones">
              <button className="boton" type="submit" value="Login">
                login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const MapStateProps = state => {
  return {
    backErrors: state.backErrors
  };
};

const mapDispathToProps = {
  sendLogin
};

export default connect(
  MapStateProps,
  mapDispathToProps
)(Login);
