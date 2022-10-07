import { Container } from "@mui/material";
import React from "react";
import "./intro.css";

function Intro() {
  return (
    <div className="intro">
      <Container maxWidth="xl">
        <div className="i-text">
          <h2 className="i-t-h2">Through Art</h2>
          <p className="i-t-p">
            Like Mozart touching piano keys <br />
            we touch the keyboard.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Intro;
