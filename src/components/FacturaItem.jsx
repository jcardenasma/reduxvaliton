import React from "react";
import "../assets/styles/components/FacturaItem.css";

const FacturaItem = (props) => {

  const callback = () =>{
    props.HandelHide();
  }
  /* FUNCION PARA CONVERTIR A TIPO MONEDA */
  const currencyformat = new Intl.NumberFormat('en-MX', {
    style: 'currency',
    currency: 'USD'
  })
  
  return (
    <div className="modalprincipal">
      <div className="submodal">
        <p className="colortitulo"><b>{props.empresa === 'MXN' ?'VALITON CORP & LOGISTICS':'VALITON CORP & LOGISTIC'}</b></p>
      </div>
      <div className="modalcontenido">
        {/* INICIO DE FACTURA Y FECHA */}
        <div className="cuadrotexto" style={{justifyContent: "space-around"}}>
          <div>
            <p className="colortitulo"><b>{props.noFactura}</b></p>
          </div>
          <div>
            <p className="colortitulo"><b>{props.fechaFact}</b></p>
          </div>
        </div>
        {/* INICIO DE DATOS DENTRO DEL MODAL */}
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
  <span className="salto">{props.portLoading}</span>
            </p>
          </div>
          <div className="col-7">
            <p>
              <b>Destino: </b>
  <span className="salto">{props.portDischarge}</span>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <p>
              <b>Importe: </b>
              <span className="salto">{currencyformat.format(props.importeFact)}</span>
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
      <div className = "facturahr"><hr/></div>
      
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