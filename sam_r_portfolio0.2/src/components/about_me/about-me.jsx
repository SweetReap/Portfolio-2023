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
    <div className="skills-container" data-aos="zoom-out">
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
            Emotion, Consistency, Accessibility, using tools at my disposal to
            bring out the character in my projects.
          </div>
        </div>
        <hr />
        <span className="desc">
          I love to explore variations of digital visual art mediums. Whether
          it's graphic design, fine art illustration, or motion graphics, I
          enjoy using all of them.
        </span>
      </div>

      <div className="experience">
        <hr />
        <Heading str="EXPERIENCE" />

        <div className="job">
          <div className="title">Lehman College</div>
          <div className="sub">
            {" "}
            <div className="date">
              <aside>September 2024 - Present</aside>
            </div>
            <div className="subtitle">
              College Office Assistant, Registrar Office
            </div>
            <div className="location">Bronx,NY</div>
          </div>

          <div className="desc">
            <ul>
              <li>
                Designed professional PowerPoint presentations to communicate
                the Office of The Registrar’s services and procedures to
                students, enhancing departmental transparency and improving
                student understanding of available resources.
              </li>
              <li>
                Collaborated with the Record and Transcripts unit to automate
                the process of resolving duplicate student records using Python
                Automation, decreasing process time by 50%.
              </li>
              <li>
                Developed a Power BI application that streamlines the enrollment
                process for ENCORE students, increasing structure and formality
                to the original process, and minimizing billing complications by
                80%.
              </li>
              <li>
                Generated and reported daily enrollment metrics to the
                Enrollment Management team, providing critical data insights to
                support strategic decision-making and institutional planning.
              </li>
              <li>
                Developed comprehensive PowerPoint presentations and training
                documentation for new staff onboarding, reducing the need for
                individual one-on-one meetings and improving training efficiency
                across the organization.
              </li>
            </ul>
          </div>
        </div>
        <div className="job">
          <div className="title">Lehman College</div>
          <div className="sub">
            {" "}
            <div className="date">
              <aside>Oct 2021 - August 2024</aside>
            </div>
            <div className="subtitle">College Assistant, Student Retention</div>
            <div className="location">Bronx,NY</div>
          </div>

          <div className="desc">
            <ul>
              <li>
                Created various graphic materials such as tutorial videos,
                informational flyers, and eLearning modules for Lehman Navigate,
                improving students’ and upcoming advisors’ better understanding
                of Navigate.
              </li>
              <li>
                Assisted with the back-end configuration of the Navigate Mass
                Advisor Reassignment project, ensuring accuracy, and improving
                the quality of future advisement of undergraduate students using
                Power Query.
              </li>
              <li>
                Participated with the Navigate team to analyze hundreds of
                student records with CUNYfirst to implement new systems and
                increase enrollment and graduation success.
              </li>
              <li>
                Collected and integrated data from CUNYfirst to create and
                maintain various Power BI dashboards for the Nursing Department
                and Transfer Explorer team, increasing insight for over 5,000
                student records.
              </li>
              <li>
                Designed the user interface for the new Power BI dashboard for
                CUNY T-REX after retrieving the necessary data from the
                Assistant Director of Student Success Initiatives.
              </li>
              <li>
                Participated in multiple outreach call campaigns to address and
                resolve enrollment and tuition concerns, offering clear support
                to students through organized campaigns.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
