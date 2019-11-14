import React, { useState } from "react";
import { connect } from "react-redux";
import { getTerrestre } from "../actions";
import TerrestreItem from "../components/TerrestreItem";
import '../assets/styles/components/Traking.css';

const Terrestre = props => {
  useState(() => props.getTerrestre('embarqueTer',props.loged.clave));

  const [input, setValues] = useState({
    busqueda: null,
    consulta: false,
    alert: false,
    filtrados: [false]
  });

  const handleSubmit = event => {
    if (input.busqueda) {
      setValues({
        ...input,
        alert: false,
        consulta: true,
        filtrados: props.embarquesTerr.filter(
          Terrestre => Terrestre.idFileTer.toLowerCase() === input.busqueda
        )
      });
    } else setValues({ ...input, filtrados: [], alert: true });
  };

  const handleFinderChange = event => {
    setValues({
      ...input,
      busqueda: event.target.value.toLowerCase()
    });
  };

  return (
    <div className="principal">
    <div className="text-center traking">
      <h1>Land-Tracking </h1>
      {/* INICIO DEL INPUT BUSQUEDA */}
      <div className="d-flex justify-content-center">
        <div>
          <input
            id = "date"
            name="filterT"
            type="text"
            onChange={handleFinderChange}
            className="form-control"
            placeholder="IdTerr / From"
            aria-label="Recipient's username"
          ></input>
        </div>
        <div onClick={handleSubmit}>
          <button className="btn btn-info">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
     {/* FIN DEL INPUT BUSQUEDA */}
      <div>
        {input.alert && (
          <div className="alert alert-danger" role="alert">
            You must enter a reference land to search
          </div>
        )}
      </div>
      {input.consulta && (
        <div>
          {input.filtrados[0] ? (
            input.filtrados.map(item => (
              <TerrestreItem key={item.idFileTer} {...item} />
            ))
          ) : (
            <div className="alert alert-danger" role="alert">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
    </div>
  );
};

const MapStateProps = state => {
  return {
    embarquesTerr: state.embarquesTerr,
    loged: state.loged
  };
};

const mapDispathToProps = {
  getTerrestre
};

export default connect(
  MapStateProps,
  mapDispathToProps
)(Terrestre);
