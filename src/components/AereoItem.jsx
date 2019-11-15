import React from "react";
import "../assets/styles/components/TrakingItem.css";

const AereoItem = props => {
  return (
    <div className="ter">
      <div className="imgabout">
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">Reference</p>
              <p>{props.idFileAer}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i class="fas fa-user-tag"></i>
            </div>
            <div className="timeline-content right">
              <p className="timeline-content-date">Shipper</p>
              <p>{props.shipper}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i class="fas fa-user"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">Consignee</p>
              <p>{props.consignatario}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <div className="timeline-content right">
              <p className="timeline-content-date">Purcharse order</p>
              <p>{props.ordenCompra}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i class="fas fa-truck-moving"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">AOL</p>
              <p>{props.origen}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <div className="timeline-content right">
              <p className="timeline-content-date">AOD</p>
              <p>{props.destino}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i class="fas fa-truck-moving"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">AWB</p>
              <p>{props.awb}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-clipboard-list"></i>
            </div>
            <div className="timeline-content right">
              <p className="timeline-content-date">HWB</p>
              <p>{props.hwb}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-receipt"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">ETD</p>
              <p>{props.etd}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i class="fas fa-boxes"></i>
            </div>
            <div className="timeline-content right">
              <p className="timeline-content-date">ETA</p>
              <p>{props.eta}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-kaaba"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">STATUS</p>
              <p>{props.status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AereoItem;
