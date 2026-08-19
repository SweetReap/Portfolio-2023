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
import Heading from "../bits/Bits";
// import Spline_Jewel from "../../assets/3D/spline_jewel";

export default function About_Me() {
  const rotatingsquare = <div className="back" />;

  return (
    <div className="skills-container" >
      <div className="list" data-aos="flip-down">
        <Heading str="TOOLS" />
        <div className="skills">
          <ul data-aos="fade-down">
            <li>
              <FaReact className="icon-react" />
              <a>React.JS</a>
            </li>
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

        <Heading str="LANGUAGES" />

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
            also make digital illustrations in either design or conceptual art.
          </div>
        </div>

        <hr />
        <div className="span-wid">
          WHAT I VALUE
          <div className="span-wid desc">
            Emotion, Consistency, and Accessibility, as well as using digital and analog tools at my disposal to
            bring out the character in my projects.
          </div>
        </div>
        <hr />
        <span className="span-wid desc">
          I love to explore variations of digital visual art mediums. Whether
          it's illustration, or motion graphics, I
          create it all. 
        </span>
      </div>

      {/* <div className="experience">
        <hr />
        <Heading str="EXPERIENCE" />
        <div className="job">
          <div className="title">Lehman College</div>
          <div className="sub">
            {" "}
            <div className="date">
              <aside>November 2025 - Present</aside>
            </div>
            <div className="subtitle">
              Enrollment Coordinator, Registrar Office
            </div>
            <div className="location">Bronx,NY</div>
          </div>

          <div className="desc">
            Assists and coordinates student enrollment while creating faculty technology solutions (instructional materials). <br/>
            Reports enrollment metrics for Enrollment Management, oversees special student groups 
            for registration, and supervises e-mail communication for staff and students. 
          </div>
        </div>

      </div> */}
    </div>
  );
}
