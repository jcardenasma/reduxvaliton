import React, { useState } from "react";
import { connect } from "react-redux";
import { getFacturas , sendAttachment } from "../actions";
import { Toggle, Modal } from "../utils/modalUtil";

import "../assets/styles/components/Traking.css";
import "../assets/styles/components/Facturas.css";
import FacturaItem from "../components/FacturaItem";

const Factruas = props => {
  useState(() => {
    props.getFacturas("getFacturas", props.loged.clave);
  });

  const [input, setValues] = useState({
    busqueda: null,
    filtrados: props.facturas
  });

  const handleFinderChange = event => {
    setValues({
      ...input,
      busqueda: event.target.value.toLowerCase()
    });
  };

  const getEncodeFactura = (factura,nomarchivo,campo) => {
    //Declarando estado del formulario
    const archivo = {
      factNum: factura.factNum,
      nombreArchivoA: campo === "nombreArchivoA" ? nomarchivo : "",
      nombreArchivoB: campo === "nombreArchivoB" ? nomarchivo : "",
      nombreArchivoC: campo === "nombreArchivoC" ? nomarchivo : "",
      nombrePdf: campo === null ? factura.nombrePdf : ""
    };
    props.sendAttachment('getEncodeFactura', archivo);
  }



const changeIcon = (a,item,c,campo) =>{
switch (a) {
  case 'pdf':
    return (<button
      className="pdf btn btn-link"
      onClick = {()=>getEncodeFactura(item,c,campo)}
    ><i className="fas fa-file-pdf"></i></button>);
  case 'png':
    return (<button
      className="image btn btn-link"
      onClick = {()=>getEncodeFactura(item,c,campo)}
    ><i className="fas fa-file-image"></i></button>);
  case 'JPG':
    return (<button
      className="image btn btn-link"
      onClick = {()=>getEncodeFactura(item,c,campo)}
    ><i className="fas fa-file-image"></i></button>);
  case 'xlsx':
    return (<button
      className="xlsx btn btn-link"
      onClick = {()=>getEncodeFactura(item,c,campo)}
    ><i className="fas fa-file-excel"></i></button>);
  case 'docx':
    return (<button
      className="docx btn btn-link"
      onClick = {()=>getEncodeFactura(item,c,campo)}
    ><i className="fas fa-file-word"></i></button>);
  default:
    return (<button
      className="contenedordefault"
      onClick = {()=>getEncodeFactura(item,c,campo)}
    ><i className="fas fa-file-alt"></i></button>);
}

}

const handleSubmit = event => {
  event.preventDefault();
  if (input.busqueda) {
    setValues({
      ...input,
      filtrados: props.facturas.filter(
        factura =>
          factura.noFile.toLowerCase() === input.busqueda ||
          factura.noFactura.toLowerCase() === input.busqueda ||
          factura.fechaFact.toLowerCase() === input.busqueda ||
          factura.reference.toLowerCase() === input.busqueda
      )
    });
  } else setValues({ ...input, filtrados: props.facturas });
};

return (
  /*INICIO DEL BOTON */
  <div className="principal">
    <div className="text-center traking">
      <h1>Invoices Statement</h1>
      {/*INICIO INPUT BUSUQUEDA*/}
      <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center">
          <div>
            <input
              id="date"
              name="filterF"
              type="text"
              onChange={handleFinderChange}
              className="form-control"
              placeholder="Invoice / File / Date / PO"
              aria-label="Recipient's username"
            ></input>
          </div>
          <div>
            <button className="btn btn-info" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
    <div className="tablafactura">
      <table style={{ width: "100%" }}>
        <thead>
          <tr className="titulotabla">
            <th>Invoice No.</th>
            <th>File</th>
            <th>PO</th>
            <th className="prioridad1">Company</th>
            <th className="prioridad1">Currency</th>
            <th className="prioridad1">Payment date</th>
            <th>Details</th>
            <th>Pdf</th>
            <th>Xml</th>
            <th>Attachment A</th>
            <th>Attachment B</th>
            <th>Attachment C</th>
          </tr>
        </thead>
        <tbody>
          {input.filtrados.map(item => (
            <tr className="contenido" key={item.cfdi}>
              <td>{item.noFactura}</td>
              <td>{item.noFile}</td>
              <td>{item.reference}</td>
              <td className="prioridad1">
                {item.empresa === "MXN"
                  ? "VALITON CORP & LOGISTICS"
                  : "VALITON CORP & LOGISTIC"}
              </td>
              <td className="prioridad1">{item.codigoDivisa}</td>
              <td className="prioridad1">{item.fechaPago}</td>
              <td>
                <Toggle
                  toggle={show => (
                    <div>
                      <a href="#Modal" onClick={show}>
                        <i className="far fa-eye"></i>
                      </a>
                    </div>
                  )}
                  content={hide => (
                    <Modal>
                      <FacturaItem {...item} HandelHide={hide} />
                    </Modal>
                  )}
                />
              </td>
              <td>
                <button
                  className="pdf btn btn-link"
                  onClick = {()=>getEncodeFactura(item,null,null)}
                >
                  <i className="fas fa-file-pdf"></i>
                </button>
              </td>
              <td>
                <a
                  className="xml"
                  download={`${item.noFactura}.xml`}
                  href={`data:application/octet-stream;base64,${item.xmlEncode}`}
                >
                  <i className="fas fa-code"></i>
                </a>
              </td>
              <td>
                {item.nombreArchivoA === "" ? (
                  ""
                ) : (
                      changeIcon(item.nombreArchivoA.split(".").pop(),item,item.nombreArchivoA,"nombreArchivoA")      
                  )}
              </td>
              <td>
                {item.nombreArchivoB === "" ? (
                  ""
                ) : (
                    
                      changeIcon(item.nombreArchivoB.split(".").pop(),item,item.nombreArchivoB,"nombreArchivoB")
                  
                  )}
              </td>
              <td>
                {item.nombreArchivoC === "" ? (
                  ""
                ) : (
                    
                    changeIcon(item.nombreArchivoC.split(".").pop(),item,item.nombreArchivoC,"nombreArchivoC")
                    
                  )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
};

const MapStateProps = state => {
  return {
    facturas: state.facturas,
    loged: state.loged
  };
};

const MapDispathToProps = {
  getFacturas,
  sendAttachment
};

export default connect(MapStateProps, MapDispathToProps)(Factruas);
