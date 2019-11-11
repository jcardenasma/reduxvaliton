import React, { useState } from "react";
import { connect } from "react-redux";
import { getMaritimo } from "../actions";
import MaritimoItem from "../components/MaritimoItem";
import '../assets/styles/components/Traking.css';

const Maritimo = props => {
  const { embarquesMar } = props;

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
        filtrados: embarquesMar.filter(
          Maritimo =>
            Maritimo.idFile === Number(input.busqueda) ||
            Maritimo.mbl.toLowerCase() === input.busqueda ||
            Maritimo.hbl.toLowerCase() === input.busqueda ||
            Maritimo.contenedores.toLowerCase() === input.busqueda
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
    <>
    <div className="text-center traking">
      <h1 className="">Maritimo-Tracking</h1>
      <div className="d-flex justify-content-center">
        <div>
          <input
            id = "date"
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
    </div>
    {input.consulta && (
        <div>
          {input.filtrados[0] ? (
            input.filtrados.map(item => (
              <MaritimoItem key={item.idFile} {...item} />
            ))
          ) : (
              <div className="alert alert-danger" role="alert">
                No results found
            </div>
            )}
        </div>
      )}
    </>
  );
};

const MapStateProps = state => {
  return {
    embarquesMar: state.embarquesMar
  };
};

const mapDispathToProps = {
  getMaritimo
};

export default connect(
  MapStateProps,
  mapDispathToProps
)(Maritimo);
