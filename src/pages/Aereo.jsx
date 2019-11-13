import React, { useState } from "react";
import { connect } from "react-redux";
import { getAereo } from "../actions";
import "../assets/styles/components/Traking.css";
import AereoItem from "../components/AereoItem";

const Aereo = props => {

    useState(() => props.getAereo('embarqueAer',props.loged.clave));

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

  const handleSubmit = () => {
    if (input.busqueda) {
      setValues({
        ...input,
        alert: false,
        consulta: true,
        filtrados: props.embarquesAer.filter(
          Aereo =>
            Aereo.idFile === Number(input.busqueda) ||
            Aereo.mbl.toLowerCase() === input.shipper  ||
            Aereo.hbl.toLowerCase() === input.busqueda ||
            Aereo.contenedores.toLowerCase() === input.busqueda
        )
      });
    } else setValues({ ...input, filtrados: [], alert: true });
  };

  return (
    <>
      <div className="text-center traking">
        <h1 className="">Aereo-Tracking</h1>
        <div className="d-flex justify-content-center">
          <div>
            <input
              id="date"
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
              <AereoItem key={item.idFileAer} {...item} />
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
    embarquesAer: state.embarquesAer
  };
};

const mapDispathToProps = {
    getAereo
};

export default connect(MapStateProps, mapDispathToProps)(Aereo);
