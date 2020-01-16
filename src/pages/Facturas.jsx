import React, { useState } from "react";
import { connect } from "react-redux";
import { getFacturas } from "../actions";
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

const changeIcon = (a,b,c) =>{
switch (a) {
  case 'pdf':
    return (<a
      className="pdf"
      download={c}
      href={`data:application/octet-stream;base64,${b}`}
    ><i className="fas fa-file-pdf"></i></a>);
  case 'png':
    return (<a
      className="image"
      download={c}
      href={`data:application/octet-stream;base64,${b}`}
    ><i className="fas fa-file-image"></i></a>);
  case 'JPG':
    return (<a
      className="image"
      download={c}
      href={`data:application/octet-stream;base64,${b}`}
    ><i className="fas fa-file-image"></i></a>);
  case 'xlsx':
    return (<a
      className="xlsx"
      download={c}
      href={`data:application/octet-stream;base64,${b}`}
    ><i className="fas fa-file-excel"></i></a>);
  case 'docx':
    return (<a
      className="docx"
      download={c}
      href={`data:application/octet-stream;base64,${b}`}
    ><i className="fas fa-file-word"></i></a>);
  default:
    return (<a
      className="contenedor"
      download={c}
      href={`data:application/octet-stream;base64,${b}`}
    ><i className="fas fa-file-alt"></i></a>);
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
                <a
                  className="pdf"
                  download={item.nombrePdf}
                  href={`data:application/octet-stream;base64,${item.pdfEncode}`}
                >
                  <i className="fas fa-file-pdf"></i>
                </a>
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
                {item.archivoA === "" ? (
                  ""
                ) : (
                      changeIcon(item.nombreArchivoA.split(".").pop(),item.archivoA,item.nombreArchivoA)      
                  )}
              </td>
              <td>
                {item.archivoB === "" ? (
                  ""
                ) : (
                    
                      changeIcon(item.nombreArchivoB.split(".").pop(),item.archivoB,item.nombreArchivoB)
                  
                  )}
              </td>
              <td>
                {item.archivoC === "" ? (
                  ""
                ) : (
                    
                    changeIcon(item.nombreArchivoC.split(".").pop(),item.archivoC,item.nombreArchivoC)
                    
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
  getFacturas
};

export default connect(MapStateProps, MapDispathToProps)(Factruas);
