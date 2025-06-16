import "./About.scss";
import { useState } from "react";

const AboutPre = () => {
  return (
    <div className="main--inner">
      <p>...y vos tampoco</p>
    </div>
  );
};

// const [ time, setTime ] = useState("")


const About = () => {
  return (
    <div className="main--inner">

      <div className="intro">
        <p>Soy Natasha, soy desarrolladora web, especializada en front end, o sea el revoque.</p>
        <p>Este es mi portfolio, y como es mío yo lo hago como quiero</p>
      </div>
    </div>
  );
};

export default About;
