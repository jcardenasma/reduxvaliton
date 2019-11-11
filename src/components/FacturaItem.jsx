import React from "react";
import "../assets/styles/components/FacturaItem.css";

const FacturaItem = (props) => {
  return (
    <div className="modalprincipal">
      <div className="submodal">
        <p>EMPRESA FACTURA</p>
      </div>
      <div className="modalcontenido">
        <div className="cuadrotexto" style={{justifyContent: "space-between"}}>
          <div>
            <p>No Factura</p>
          </div>
          <div>
            <p>Fecha Factura</p>
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <p>
              <b>File: </b> <span className="salto">A-556552</span>
            </p>
          </div>
          <div className="col-7">
            <p>
              <b>Tipo Comprobante: </b>
              <span className="salto">I-trasferencia</span>
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
              <span className="salto">13.54</span>
            </p>
          </div>
          <div className="col-7 ">
            <p>
              <b>Divisa: </b>
              <span className="salto">USD</span>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="botonmodal">
        <div>
          <button className="cancelar" href="#Close" onClick={props.HandelHide,console.log("no puelo")}>
            SALIR
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacturaItem;