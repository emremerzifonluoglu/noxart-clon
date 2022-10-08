import React, { useState } from "react";
import "./navbar.css";
import noxart from "../../img/logo.png";
import { Container } from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
  };

  const hendleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <Container maxWidth="xl">
          <div className="container">
            <div className="n-logo">
              <img
                src={noxart}
                alt=""
                className={isScrolled ? "n-l-img scrolled" : "n-l-img"}
              />
            </div>
            <div className="n-menu">
              <div className="n-m-pages">
                <a href="/" className="page">
                  Home
                </a>
              </div>
              <div className="n-m-pages">
                <a href="/" className="page">
                  About
                </a>
              </div>
              <div className="n-m-pages">
                <a href="/" className="page">
                  Career
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <button
        onClick={hendleClick}
        className={isScrolled ? "scroll" : "s-button"}
      >
        <ArrowCircleUpIcon fontSize="large" />
      </button>
    </>
  );
}

export default Navbar;
