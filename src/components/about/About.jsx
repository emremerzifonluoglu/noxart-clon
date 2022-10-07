import { Container } from "@mui/material";
import React from "react";
import "./about.css";
import art from "../../img/art-icon.png";

function About() {
  return (
    <Container maxWidth="xl">
      <div className="about">
        <div className="a-decs">
          <h2 className="a-d-h2">
            We are a technology company in love with art
          </h2>
          <p className="a-d-p">
            We are an art and technology company that builds the future that
            combines technology and art in the global world.
          </p>
        </div>
        <div class="grid-container">
          <div class="grid-item">
            <div className="grid-header">
              <img className="grid-img" src={art} alt="" />
              <h2 className=" grid-h2">Interactive Web Applications</h2>
            </div>

            <p className="grid-p">
              Thanks to our highly interactive, user-friendly simple structure
              and most importantly our web team that successfully integrates the
              latest technology, we ensure that our players can do all the
              processes they need easily and quickly, and be instantly informed
              of all news and updates about the game.
            </p>
          </div>
          <div class="grid-item">
            <div className="grid-header">
              <img className="grid-img" src={art} alt="" />
              <h2 className=" grid-h2">Anti- Cheat System</h2>
            </div>

            <p className="grid-p">
              Cheating is one of the biggest problems in the gaming industry.
              Using cheats in the game prevents other players from enjoying the
              game, and at the same time, obtaining paid items illegally from
              the game market affects the company's earnings. With our NoxPro
              project, developed by our competent software developers, we offer
              a solution to one of the most important problems of the industry.
            </p>
          </div>
          <div class="grid-item">
            <div className="grid-header">
              <img className="grid-img" src={art} alt="" />
              <h2 className=" grid-h2">Game Development</h2>
            </div>

            <p className="grid-p">
              The most important mission of our studio is the video game
              production. The studio has the necessary knowledge and experience
              to produce computer games within AAA standards. In this context,
              the further development of the games are also offered as expansion
              packs by us, including full support.
            </p>
          </div>
        </div>
        <hr className="hr" />
        <div className="a-decs">
          <h2 className="a-d-h2">Get to Know Us </h2>
          <p className="a-d-p">Get to know us better with our product</p>
        </div>
        <div class="grid-container-2">
          <div class="grid-item-1">
            <h2 className=" grid-h2-2">Evil Stone Online</h2>

            <p className="grid-p">Antalya / Turkey</p>
            <p className="grid-p">
              As a game genre, it subordinates in the MMORPG game genre. It is
              the favorite game genre for people who like to play with other
              people instead of playing alone. This genre gives the game many
              features including customization features. Most of the RPG games
              take place in imaginary realms like the middle.
            </p>

            <div className="grid-f">
              <p className="grid-p">TAGS</p>
              <div className="grid-spans">
                <span className="grid-s">evilstone</span>
                <span className="grid-s">game</span>
              </div>
            </div>
            <div className="grid-button">
              <button className="grid-b">Read</button>
            </div>
          </div>

          <div class="grid-item-2">
            <h2 className=" grid-h2-2">NoxGuard Shield</h2>

            <p className="grid-p">Antalya / Turkey</p>
            <p className="grid-p">
              The main problem of anti-cheat and security systems written for
              games is that they create a client-side access control only on
              callbacks given by the operating system.
              <br />
              <br />
              <br />
            </p>

            <div className="grid-f">
              <p className="grid-p">TAGS</p>
              <div className="grid-spans">
                <span className="grid-s">security</span>
                <span className="grid-s">noxpro</span>
              </div>
            </div>
            <div className="grid-button">
              <button className="grid-b">Read</button>
            </div>
          </div>
          <div class="grid-item-3">
            <h2 className=" grid-h2-2">Nox Engine</h2>

            <p className="grid-p">Antalya / Turkey</p>
            <p className="grid-p">
              <br />
              <br />
              <br />
              <br />
              <br />
            </p>

            <div className="grid-f">
              <p className="grid-p">TAGS</p>
              <div className="grid-spans">
                <span className="grid-s">mountains</span>
                {/* <span className="grid-s">game</span> */}
              </div>
            </div>
            <div className="grid-button">
              <button className="grid-b">Read</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default About;
