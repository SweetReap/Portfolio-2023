import {
  SiAdobeillustrator,
  SiCsharp,
  SiProcessingfoundation,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiUnity,
  SiJavascript,
} from "react-icons/si";
import { FaReact, FaJava } from "react-icons/fa6";
import "./style.scss";

import "aos/dist/aos.css";
import Spline_Sam_Two from "../../assets/3D/spline_jewel_2";
// import Spline_Jewel from "../../assets/3D/spline_jewel";

export default function About_Me() {
  const rotatingsquare = <div className="back" />;

  return (
    <div className="skills-container" data-aos="zoom-out">
      <div className="list" data-aos="flip-down">
        <div className="section">
          <span>T</span>
          <span>O</span>
          <span>O</span>
          <span>L</span>
          <span>S</span>
        </div>
        <div className="skills">
          <ul data-aos="fade-down">
            <li>
              <FaReact className="icon-react" />
              <a>React.JS</a>
            </li>

            {/* <li>
              <SiUnity className="icon-react" />
              <a>Unity</a>
            </li> */}
            <li>
              <SiAdobephotoshop className="icon-react" />
              <a>Photoshop</a>
            </li>
            <li>
              <SiAdobeillustrator className="icon-react" />
              <a> Illustrator</a>
            </li>
            <li>
              <SiAdobeaftereffects className="icon-react" />
              <a> After Effects</a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="section">
          <span>L</span>
          <span>A</span>
          <span>N</span>
          <span>G</span>
          <span>U</span>
          <span>A</span>
          <span>G</span>
          <span>E</span>
          <span>S</span>
        </div>

        <div className="skills">
          <ul data-aos="fade-down">
            <li>
              <FaJava className="icon-react" />
              <a>Java</a>
            </li>
            <li>
              <SiJavascript className="icon-react" />
              <a>JavaScript</a>
            </li>
            <li>
              <img
                src="/images/lua.svg"
                alt="lua-logo"
                className="icon-react"
                width={"70px"}
              />
              <a>LUA</a>
            </li>
            <li>
              <SiProcessingfoundation className="icon-react" />
              <a>Processing 4</a>
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="about-me-span">
        <div className="span-wid">
          WHAT I DO
          <div className="span-wid desc">
            I develop mini-games, web applications, and create motion graphic
            videos. Anything that involves digital art peaks my interests! I
            also make digital illustrations - either character design or concept
            art.
          </div>
        </div>

        <hr />
        <div className="span-wid">
          WHAT I VALUE
          <div className="span-wid desc">
            Emotion, Consistency, Accessibility, and using tools at my disposal
            to bring out the Character in my projects.
          </div>
        </div>
        <hr />
        <span className="desc">
          I love to explore variations of digital visual art mediums. Whether
          it's graphic design, fine art illustration, or motion graphics, I
          enjoy using all of them.
        </span>
        <hr />
      </div>
     
      <div className="experience">
      <hr />
        <div className="section">
          <span>E</span>
          <span>X</span>
          <span>P</span>
          <span>E</span>
          <span>R</span>
          <span>I</span>
          <span>E</span>
          <span>N</span>
          <span>C</span>
          <span>E</span>
        </div>
        <div className="job">
          <div className="title">Lehman College</div>
          <div className="sub">
            {" "}
            <div className="date">
              <aside>Oct 2021 - Present</aside>
            </div>
            <div className="subtitle">College Assistant, Student Retention</div>
            <div className="location">Bronx,NY</div>
          </div>

          <div className="desc">
            <ul>
              <li>
                Collaborated with the Director of Student Success Initiatives to
                create various educational materials for students and staff,
                such as tutorial videos, informational flyers, and eLearning
                modules.{" "}
              </li>
              <li>
                Participated with the Navigate team to analyze hundreds of
                student records with PeopleSoft and implement new systems to
                increase enrollment and graduation success.
              </li>
              <li>
                Advised prospective and current students on college enrollment
                procedures, lowering.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="fun-facts">
        <hr />
        <div className="fun-fact title">FUN FACTS</div>
        <span>Cat Lover, Fountain Pen Collector, and a Big Dreamer!</span>
        <img
          src="/images/pen.png"
          alt="fountain pen"
          width={"100px"}
          className="pen"
        />
      </div> */}
      {/* <div className="canvas">
        <div className="rotatingsquares">
          {rotatingsquare}
          {rotatingsquare}
          {rotatingsquare}

          {rotatingsquare}
          {rotatingsquare}
        </div>
        <Spline_Sam_Two />
      </div> */}
    </div>
  );
}
