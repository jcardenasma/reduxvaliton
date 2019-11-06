import React, { useState } from "react";
import { connect } from "react-redux";
import { getTerrestre } from "../actions";
import TerrestreItem from "../components/TerrestreItem";

const Terrestre = props => {
  const { embarquesTerr } = props;

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
        filtrados: embarquesTerr.filter(
          Terrestre =>
          Terrestre.idFileTer === Number(input.busqueda) ||
          Terrestre.origen.toLowerCase() === input.busqueda ||
          Terrestre.destino.toLowerCase() === input.busqueda
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
    <div className="text-center mt-5">
      <h1>Traking results</h1>
      <div className="d-flex justify-content-center">
        <div>
          <input
            name="filter"
            type="text"
            onChange={handleFinderChange}
            className="form-control"
            placeholder="Container / transport doc"
            aria-label="Recipient's username"
          ></input>
        </div>
        <div onClick={handleSubmit}>
          <button className="btn btn-info">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      <div>
        {input.alert && (
          <div className="alert alert-danger" role="alert">
            You must enter a container or transport document number to search
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
  );
};

const MapStateProps = state => {
  return {
    embarquesTerr: state.embarquesTerr
  };
};

const mapDispathToProps = {
    getTerrestre
};

export default connect(
  MapStateProps,
  mapDispathToProps
)(Terrestre);
