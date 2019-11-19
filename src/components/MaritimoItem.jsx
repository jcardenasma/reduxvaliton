import React from "react";

import "../assets/styles/components/TrakingItem.css";

const MaritimoItem = props => {

  return (
    <div className="ter">
      <div className="imgabout" >
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">ETA</p>
              <p>{props.eta}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-ship"></i>
            </div>
            <div className="timeline-content right">
              <p className="timeline-content-date">FROM</p>
              <p>{props.pol}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">ETD</p>
              <p>{props.etd}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-ship"></i>
            </div>
            <div className="timeline-content right">
              <p className="timeline-content-date">TO</p>
              <p>{props.pod}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-clipboard-list"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">BOOKING</p>
              <p>{props.mbl}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-receipt"></i>
            </div>
            <div className="timeline-content right">
              <p className="timeline-content-date"> HBL</p>
              <p>{props.hbl}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-pallet"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">CONTAINER NUMBERS</p>
              <p>{props.contenedores}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-kaaba"></i>
            </div>
            <div className="timeline-content right">
              <p className="timeline-content-date">CONTAINER TYPE</p>
              <p>
                CNT20: {props.cntr20DC} <br></br> CNT40DC: {props.cntr40DC}
                <br></br>CNT40HQ: {props.cntr40HQ} <br></br>
                CNTLCL: {props.cntrLCL}
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-ship"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">SHIPPING</p>
              <p>{props.naviera}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-kaaba"></i>
            </div>
            <div className="timeline-content right">
              <p className="timeline-content-date">TYPE</p>
              <p>{props.tipo}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-ship"></i>
            </div>
            <div className="timeline-content">
              <p className="timeline-content-date">VOYAJE</p>
              <p>{props.viaje}</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-clipboard-list"></i>
            </div>
            <div className="timeline-content right">
              <p className="timeline-content-date">FILE</p>
              <p>MAR{props.idFile}</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-kaaba"></i>
            </div>
            <div className="timeline-content left">
              <p className="timeline-content-date">STATUS</p>
              <p>{props.status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default MaritimoItem;
