import "./Home.css";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Slide from "react-reveal/Slide";

const Home = () => {
  return (
    <div id="home" className="home">
      <div className="description text-left">
        <TypeAnimation
        className="typing"
          sequence={[
            "I'm Enzo Grillo", // Types 'One'
            1000, // Waits 1s
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "4.5em" }}
        />
        <Slide left>
          <p>
            a very adaptable professional with great coding skills. I speak
            French, English, Italian, which makes me a valuable asset for
            companies with international clients. I am passionate about
            technology and love to code, but I am also very creative and serious
            when it comes to my work.
          </p>
        </Slide>
      </div>
      <Slide right>
        <div className="container">
          <div className="image"></div>
          <div className="image2"></div>
        </div>
      </Slide>
    </div>
  );
};

export default Home;
