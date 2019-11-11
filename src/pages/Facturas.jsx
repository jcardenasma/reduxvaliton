import React, { useState } from "react";
import { connect } from "react-redux";
import { getFacturas } from "../actions";
import { Toggle, Modal } from "../utils/modalUtil";

import "../assets/styles/components/Traking.css";
import "../assets/styles/components/Facturas.css";
import FacturaItem from "../components/FacturaItem";

const Factruas = props => {
  useState(() => {
    props.getFacturas("getFacturas", props.loged.clave)
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

  const handleSubmit = () => {
    if (input.busqueda) {
      setValues({
        ...input,
        filtrados: props.facturas.filter(
          factura =>
            factura.noFile.toLowerCase() === input.busqueda ||
            factura.noFactura.toLowerCase() === input.busqueda ||
            factura.fechaFact.toLowerCase() === input.busqueda
        )
      });
    } else setValues({ ...input, filtrados: props.facturas });
  };

  return (
    <div className="principal">
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
            <button className="btn btn-info" onClick={handleSubmit}>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "left", marginTop: "45px" }}>
        <table style={{ width: "100%" }}>
          <thead>
            <tr className="titulotabla">
              <th>No Factura</th>
              <th>File</th>
              <th className="prioridad1">Empresa Factura</th>
              <th className="prioridad1">Divisa</th>
              <th className="prioridad1">Fecha de Pago</th>
              <th>Info</th>
              <th>Pdf</th>
              <th>Xml</th>
            </tr>
          </thead>
          <tbody>
            {input.filtrados.map(item => (
              <tr className="contenido" key={item.cfdi}>
                <td>{item.noFactura}</td>
                <td>{item.noFile}</td>
                <td className="prioridad1">{item.empresa}</td>
                <td className="prioridad1">{item.codigoDivisa}</td>
                <td className="prioridad1">{item.fechaFact}</td>
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
                    download={`${item.noFactura}.xml`}
                    href={`data:application/octet-stream;base64,${item.xmlEncode}`}
                  >
                    <i className="fas fa-code"></i>
                  </a>
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

export default connect(
  MapStateProps,
  MapDispathToProps
)(Factruas);
