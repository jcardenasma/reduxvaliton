import React from "react";

import "../assets/styles/components/TrakingItem.css";

const TerrestreItem = props => {
 
  return (

    <div className="ter">
      <div className="imgabout">
        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-icon">
            <i class="fas fa-file-alt"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">OPERATION</p>
              <p>{props.operacion}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
            <i class="fas fa-file"></i>
            </div>
            <div className="timeline-content right">
              <p className="timeline-content-date">TYPE</p>
              <p>{props.tipoMovimiento}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
            <i class="fas fa-shipping-fast"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">UNIT TYPE</p>
              <p>{props.tipoCaja}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <div className="timeline-content right">
              <p className="timeline-content-date">DATE OF PICKUP</p>
              <p>{props.fechaCarga}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
            <i class="fas fa-truck-moving"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">FROM</p>
              <p>{props.origen}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <div className="timeline-content right">
              <p className="timeline-content-date">DELIVERY DATE</p>
              <p>{props.fechaDescarga}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
            <i class="fas fa-truck-moving"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">TO</p>
              <p>{props.destino}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-clipboard-list"></i>
            </div>
            <div className="timeline-content right">
              <p className="timeline-content-date">SUPPLIER NATIONAL</p>
              <p>{props.lineanac}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-receipt"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">SUPPLIER INTERNATIONAL</p>
              <p>{props.lineaint}</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-icon">
              <i class="fas fa-boxes"></i>
            </div>
            <div className="timeline-content right">
              <p className="timeline-content-date">COMMODITY</p>
              <p>{props.mercancia}</p>
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

export default TerrestreItem;
