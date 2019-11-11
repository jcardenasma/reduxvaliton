import React from "react";
import "../assets/styles/components/FacturaItem.css";

const FacturaItem = (props) => {

  const callback = () =>{
    props.HandelHide();
  }

  return (
    <div className="modalprincipal">
      <div className="submodal">
        <p>{props.empresa}</p>
      </div>
      <div className="modalcontenido">
        <div className="cuadrotexto" style={{justifyContent: "space-between"}}>
          <div>
            <p>{props.noFactura}</p>
          </div>
          <div>
            <p>{props.fechaFact}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <p>
              <b>File: </b> <span className="salto">{props.noFile}</span>
            </p>
          </div>
          <div className="col-7">
            <p>
              <b>Tipo Comprobante: </b>
              <span className="salto">{props.tipoComprobante}</span>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <p>
              <b>Origen: </b>
              <span className="salto">Guadalajara</span>
            </p>
          </div>
          <div className="col-7">
            <p>
              <b>Destino: </b>
              <span className="salto">Manzanillo</span>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <p>
              <b>Importe: </b>
              <span className="salto">{props.importeFact}</span>
            </p>
          </div>
          <div className="col-7 ">
            <p>
              <b>Divisa: </b>
              <span className="salto">{props.codigoDivisa}</span>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="botonmodal">
        <div>
          <a className="cancelar" href="#Close" onClick={callback}>
            SALIR
          </a>
        </div>
      </div>
    </div>
  );
};

export default FacturaItem;