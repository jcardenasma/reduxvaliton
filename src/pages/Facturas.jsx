import React, { useState } from "react";
import { connect } from "react-redux";
import { getFacturas } from "../actions";

import "../assets/styles/components/Traking.css";

const Factruas = props => {
  useState(() => props.getFacturas("getFacturas", props.loged.clave));

  const [input, setValues] = useState({
    busqueda: null,
    consulta: false,
    alert: false,
    filtrados: [false]
  });

  const handleFinderChange = event => {
    setValues({
      ...input,
      busqueda: event.target.value.toLowerCase()
    });
  };


  return (
    <div className="text-center traking">
      <h1> Invoices Statement </h1>
      <div className="d-flex justify-content-center">
        <div>
          <input
            id="date"
            name="filterF"
            type="text"
            onChange={handleFinderChange}
            className="form-control"
            placeholder="Invoice / File / Date"
            aria-label="Recipient's username"
          ></input>
        </div>
        <div>
          <button className="btn btn-info">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const MapStateProps = state => {
  return {
    embarquesTerr: state.facturas,
    loged: state.loged
  };
};

const MapDispathToProps = {
  getFacturas
};

export default connect(
  MapStateProps,
  MapDispathToProps
)(Factruas);
