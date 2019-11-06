import React from "react";

import "../assets/styles/components/TerrestreItem.css";

const TerrestreItem = ({
    crm,
    destino,
    fechaArribo,
    fechaCarga,
    fechaDescarga,
    frontera,
    idFileTer,
    lineaint,
    lineanac,
    mercancia,
    operacion,
    origen,
    rutaInt,
    rutaNac,
    status,
    tipoCaja,
    tipoMovimiento,
    cliente
}) => {
  return (
    <div className="container-fluid">
      <hr></hr>
      <div className="ter">
        <div className="imgabout">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="timeline-content">
                <p className="timeline-content-date">ETA</p>
                <p>{fechaCarga}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-ship"></i>
              </div>
              <div className="timeline-content right">
                <p className="timeline-content-date">FROM</p>
                <p>{origen}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="timeline-content">
                <p className="timeline-content-date">ETD</p>
                <p>{fechaDescarga}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-ship"></i>
              </div>
              <div className="timeline-content right">
                <p className="timeline-content-date">TO</p>
                <p>{destino}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <div className="timeline-content">
                <p className="timeline-content-date">BOOKING</p>
                <p>{idFileTer}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-receipt"></i>
              </div>
              <div className="timeline-content right">
                <p className="timeline-content-date"> HBL</p>
                <p>{mercancia}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-pallet"></i>
              </div>
              <div className="timeline-content">
                <p className="timeline-content-date">CONTAINER NUMBERS</p>
                <p>{operacion}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-kaaba"></i>
              </div>
              <div className="timeline-content right">
                <p className="timeline-content-date">CONTAINER TYPE</p>
                <p>
                {tipoCaja}
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-ship"></i>
              </div>
              <div className="timeline-content">
                <p className="timeline-content-date">SHIPING</p>
                <p>{lineaint}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-kaaba"></i>
              </div>
              <div className="timeline-content right">
                <p className="timeline-content-date">TYPE</p>
                <p>{tipoMovimiento}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-ship"></i>
              </div>
              <div className="timeline-content">
                <p className="timeline-content-date">VOYAJE</p>
                <p>{rutaNac}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <div className="timeline-content right">
                <p className="timeline-content-date">FILE</p>
                <p>{rutaInt}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-kaaba"></i>
              </div>
              <div className="timeline-content left">
                <p className="timeline-content-date">STATUS</p>
                <p>{status}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerrestreItem;
