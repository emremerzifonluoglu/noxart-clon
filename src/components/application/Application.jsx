import { Container } from "@mui/material";
import React from "react";
import "./application.css";
import Banner from "../../img/banner.png";
import Creation from "../../img/creation-nox.png";
import Cp1 from "../../img/cp1.png";
import Cp2 from "../../img/cp2.png";
import Cp3 from "../../img/cp3.png";
import Cp4 from "../../img/cp4.png";
import Cp5 from "../../img/cp5.png";

function Application() {
  return (
    <Container maxWidth="xl">
      <div className="application">
        <div className="app">
          <div className="app-img">
            <img src={Banner} alt="" className="img" />
            <div className="left">
              <h2 className="l-h2">We Develop Cross-Platform Applications</h2>
              <p className="l-p1">
                We care about users with <b>UX</b> integrated with
              </p>
              <p className="l-p2">Powered By NoxEngine</p>
            </div>
            <div className="right">
              <img className="r-img" src={Creation} alt="" />
              <div className="r-p">
                <p className="r-p1">Make your imagination become reality</p>
              </div>
            </div>
          </div>
          <img className="cp1-img" src={Cp1} alt="" />
        </div>
        <div className="app-cp">
          <div className="app-cp1">
            <div className="app-cp-grid">
              <div className="app-cpt">
                <img src={Cp2} alt="" className="app-cpt-img" />
              </div>
              <div className="app-cpt">
                <img src={Cp3} alt="" className="app-cpt-img" />
              </div>
              <div className="app-cpt">
                <img src={Cp4} alt="" className="app-cpt-img" />
              </div>
            </div>
            <div className="app-cp5">
              <img src={Cp5} alt="" className="cp5-img" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Application;
