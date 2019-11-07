import React from "react";

import "../assets/styles/components/TrakingItem.css";

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

    <div className="ter">
      <div className="imgabout">
        <div className="timeline">

        <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">OPERACION</p>
              <p>{operacion}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <div className="timeline-content right">
              <p className="timeline-content-date">TIPO MOVIMIENTO</p>
              <p>{tipoMovimiento}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-ship"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">TIPO CAJA</p>
              <p>{tipoCaja}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <div className="timeline-content right">
              <p className="timeline-content-date">FECHA CARGA</p>
              <p>{fechaCarga}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-ship"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">ORIGEN</p>
              <p>{origen}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <div className="timeline-content right">
              <p className="timeline-content-date">FECHA DESCARGA</p>
              <p>{fechaDescarga}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-ship"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">DESTINO</p>
              <p>{destino}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-clipboard-list"></i>
            </div>
            <div className="timeline-content right">
              <p className="timeline-content-date">LINEA NACIONAL</p>
              <p>{lineanac}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-receipt"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date"> LINEA INTERNACIONAL</p>
              <p>{lineaint}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-pallet"></i>
            </div>
            <div className="timeline-content right">
              <p className="timeline-content-date">CONTAINER NUMBERS</p>
              <p>{operacion}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-kaaba"></i>
            </div>
            <div className="timeline-content">
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
            <div className="timeline-content right">
              <p className="timeline-content-date">SHIPING</p>
              <p>{lineaint}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-kaaba"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">TYPE</p>
              <p>{tipoMovimiento}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-ship"></i>
            </div>
            <div className="timeline-content right">
              <p className="timeline-content-date">VOYAJE</p>
              <p>{rutaNac}</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-clipboard-list"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">FILE</p>
              <p>{rutaInt}</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-kaaba"></i>
            </div>
            <div className="timeline-content right">
              <p className="timeline-content-date">STATUS</p>
              <p>{status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default TerrestreItem;
