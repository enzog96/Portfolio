import "./Skills.css";

import Wave from 'react-wavify'
import Fade from 'react-reveal/Fade';

import html from "../image/skills/html5.png";
import css from "../image/skills/css-3.png";
import js from "../image/skills/js.png";
import bootstrap from "../image/skills/bootstrap.png";
import tailwind from "../image/skills/tailwind-css-icon.png";
import react from "../image/skills/atom.png";
import laravel from "../image/skills/laravel-icon.png";
import github from "../image/skills/github.png";
import responsive from "../image/skills/responsive-design.png";
import nodejs from "../image/skills/node-js.png";
import vs from "../image/skills/visual-studio.png";
import cmd from "../image/skills/command-line.png";

import fullstack from "../image/competence/full-stack.png";
import design from "../image/competence/paint-brush.png";

import React from "react";

const Skills = () => {
  return (
    <div className="section1" id="skills">
       <div className="wave">
        <Wave className="wave2" fill='#1d3557'
        paused={false}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.2,
          points: 5
        }}
  />
        </div>
        <div className="skill">
      <div>
        <h1>Tools</h1>
        <div className="skills grid grid-cols-3 content-center justify-items-center gap-4 ">
          <Fade className="fade" bottom>
          <div className="kol flex items-center justify-center gap-2">
            <img src={html} alt="" />
          </div>
          </Fade>
         <Fade bottom>
         <div className="kol flex justify-center  items-center gap-2">
            <img src={css} alt="" />
          </div>
         </Fade>

          <Fade bottom>
          <div className="kol flex justify-center  items-center gap-2">
            <img src={js} alt="" />           
          </div>
          </Fade>

         <Fade bottom>
         <div className="kol flex justify-center  items-center gap-2">
            <img src={bootstrap} alt="" />
          </div>
         </Fade>
         <Fade bottom>
         <div className="kol flex justify-center  items-center gap-2">
            <img src={tailwind} alt="" />
          </div>
         </Fade>
         <Fade bottom>
         <div className="kol flex justify-center  items-center gap-2">
            <img src={react} alt="" />
          </div>
         </Fade>
         <Fade bottom>
         <div className="kol flex justify-center  items-center gap-2">
            <img src={laravel} alt="" />
          </div>
         </Fade>
         <Fade bottom>
         <div className="kol flex justify-center  items-center gap-2">
            <img src={github} alt="" />       
          </div>
         </Fade>
         <Fade bottom>
         <div className="kol flex justify-center  items-center gap-2">
            <img src={responsive} alt="" />
          </div>
         </Fade>
         <Fade bottom>
         <div className="kol flex justify-center  items-center gap-2">
            <img src={nodejs} alt="" />
          </div>
         </Fade>
         <Fade bottom>
         <div className="kol flex justify-center  items-center gap-2">
            <img src={vs} alt="" />           
          </div>
         </Fade>
         <Fade bottom>
         <div className="kol flex justify-center  items-center gap-2">
            <img src={cmd} alt="" />
          </div>
         </Fade>
        </div>
      </div>
      <div>
        <h1>Skills</h1>
        <div className="competences grid grid-cols-2 content-center justify-items-center ">
          <Fade left>
          <div className=" competence flex flex-col items-center gap-3">
            <img src={fullstack} alt=""/>
            <h2>Fullstack</h2>
            <p>For me, it's important to know all sides of the web development process. I'll learn whatever technology will help me build.</p>
          </div>
          </Fade>
          <Fade right>
          <div className=" competence flex flex-col items-center gap-3">
            <img src={design} alt=""/>
            <h2>Design Focused</h2>
            <p>I like making websites look pretty. I know that good design is just as important as good development. </p>
          </div>
          </Fade>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Skills;
