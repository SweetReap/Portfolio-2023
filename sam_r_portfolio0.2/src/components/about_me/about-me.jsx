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
import Spline_Jewel from "../../assets/3D/spline_jewel";

export default function About_Me() {
  return (
    <div className="skills-container" data-aos="fade-down">
      <div className="about-me-span">
        <div className="span-wid">
          WHAT I DO
          <div className="span-wid desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            quidem <br /> corrupti ullam alias possimus aperiam cum saepe
            dignissimos repellendus facilis officiis optio eaque nemo laudantium
            nesciunt voluptate expedita excepturi sed.
          </div>
        </div>

        <hr />
        <div className="span-wid">
          WHAT I VALUE
          <div className="span-wid desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            quidem corrupti ullam alias possimus aperiam cum saepe dignissimos{" "}
            <br /> repellendus facilis officiis optio eaque nemo laudantium
            nesciunt voluptate expedita excepturi sed.
          </div>
        </div>
        <hr />
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eum
          perferendis culpa reiciendis repellendus omnis, modi pariatur magni
          voluptates eveniet enim! Debitis accusantium est ab culpa quibusdam
          quasi, accusamus obcaecati.
        </span>
        <hr />

      </div>
      <div className="list" data-aos="flip-down">
        <hr />
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

            <li>
              <SiUnity className="icon-react" />
              <a>Unity</a>
            </li>
            <li>
              <SiAdobephotoshop className="icon-react" />
              <a>Adobe Photoshop</a>
            </li>
            <li>
              <SiAdobeillustrator className="icon-react" />
              <a>Adobe Illustrator</a>
            </li>
            <li>
              <SiAdobeaftereffects className="icon-react" />
              <a>Adobe After Effects</a>
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
              <SiCsharp className="icon-react" />
              <a>C-Sharp</a>
            </li>
            <li>
              <SiProcessingfoundation className="icon-react" />
              <a>Processing 4</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
