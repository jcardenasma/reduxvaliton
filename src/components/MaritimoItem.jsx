import React from "react";

import "../assets/styles/components/MaritimoItem.css";

const MaritimoItem = ({
  cntr20DC,
  cntr40DC,
  cntr40HQ,
  cntrLCL,
  contenedores,
  eta,
  etd,
  hbl,
  idFile,
  mbl,
  naviera,
  pod,
  pol,
  status,
  tipo,
  viaje
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
                <p>{eta}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-ship"></i>
              </div>
              <div className="timeline-content right">
                <p className="timeline-content-date">FROM</p>
                <p>{pol}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="timeline-content">
                <p className="timeline-content-date">ETD</p>
                <p>{etd}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-ship"></i>
              </div>
              <div className="timeline-content right">
                <p className="timeline-content-date">TO</p>
                <p>{pod}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <div className="timeline-content">
                <p className="timeline-content-date">BOOKING</p>
                <p>{mbl}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-receipt"></i>
              </div>
              <div className="timeline-content right">
                <p className="timeline-content-date"> HBL</p>
                <p>{hbl}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-pallet"></i>
              </div>
              <div className="timeline-content">
                <p className="timeline-content-date">CONTAINER NUMBERS</p>
                <p>{contenedores}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-kaaba"></i>
              </div>
              <div className="timeline-content right">
                <p className="timeline-content-date">CONTAINER TYPE</p>
                <p>
                  CNT20: {cntr20DC}, CNT40DC: {cntr40DC}, CNT40HQ: {cntr40HQ},
                  CNTLCL: {cntrLCL}
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-ship"></i>
              </div>
              <div className="timeline-content">
                <p className="timeline-content-date">SHIPING</p>
                <p>{naviera}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-kaaba"></i>
              </div>
              <div className="timeline-content right">
                <p className="timeline-content-date">TYPE</p>
                <p>{tipo}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-ship"></i>
              </div>
              <div className="timeline-content">
                <p className="timeline-content-date">VOYAJE</p>
                <p>{viaje}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <div className="timeline-content right">
                <p className="timeline-content-date">FILE</p>
                <p>MAR{idFile}</p>
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

export default MaritimoItem;
