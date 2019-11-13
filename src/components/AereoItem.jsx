import React from "react";
import "../assets/styles/components/TrakingItem.css";

const AereoItem = propos => {
  return (
    <div className="ter">
      <div className="imgabout">
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">
              <i class="fas fa-file-alt"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">OPERACION</p>
              <p>{/* Esperando info */}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i class="fas fa-file"></i>
            </div>
            <div className="timeline-content right">
              <p className="timeline-content-date">TIPO MOVIMIENTO</p>
              <p>{/* Esperando info */}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i class="fas fa-shipping-fast"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">TIPO CAJA</p>
              <p>{/* Esperando info */}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <div className="timeline-content right">
              <p className="timeline-content-date">FECHA CARGA</p>
              <p>{/* Esperando info */}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i class="fas fa-truck-moving"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">ORIGEN</p>
              <p>{/* Esperando info */}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <div className="timeline-content right">
              <p className="timeline-content-date">FECHA DESCARGA</p>
              <p>{/* Esperando info */}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i class="fas fa-truck-moving"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">DESTINO</p>
              <p>{/* Esperando info */}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-clipboard-list"></i>
            </div>
            <div className="timeline-content right">
              <p className="timeline-content-date">LINEA NACIONAL</p>
              <p>{/* Esperando info */}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-receipt"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">LINEA INTERNACIONAL</p>
              <p>{/* Esperando info */}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i class="fas fa-boxes"></i>
            </div>
            <div className="timeline-content right">
              <p className="timeline-content-date">MERCANCIA</p>
              <p>{/* Esperando info */}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-kaaba"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">STATUS</p>
              <p>{/* Esperando info */}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AereoItem;
