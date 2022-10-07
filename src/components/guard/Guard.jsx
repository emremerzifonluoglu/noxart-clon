import React from "react";
import "./guard.css";
import NoxGuard from "../../img/noxGuard.png";
import NoxGuardGuardes from "../../img/noxGuardGuards.png";
import { Container } from "@mui/material";

function guard() {
  return (
    <div className="guard">
      <Container maxWidth="xl">
        <div className="guard-top">
          <div className="g-t-left">
            <h2 className="g-h2">We Care About Your Safety</h2>
            <p className="g-p">
              We protect games with Anti Cheat systems.
              <br />
              We believe in fair games
            </p>
          </div>
          <div className="g-t-right">
            <img src={NoxGuard} alt="" className="g-t-img" />
          </div>
        </div>
        <div className="guard-bottom">
          <div className="g-b">
            <div className="g-b-p">
              <p className="b-p">For Fair Systems</p>
              <p className="b-p2">Strong protection against cheats</p>
            </div>
            <div className="g-b-i">
              <img className="g-b-img" src={NoxGuardGuardes} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default guard;
