import "./styles.scss";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true,
      anchorPlacement: "top-bottom",
      delay: "0",
    });
  }, []);

  const [show, setShow] = useState(false);

  return (
    //TODO: create a dynamic function for the projects that will read from one JSON file and return each section into a component.
    <div data-aos="fade-in">
      <div className="background">
        <svg
          id="patternId"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="a"
              patternUnits="userSpaceOnUse"
              width="50"
              height="100"
              patternTransform="scale(5) rotate(80)"
            >
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="hsla(0,0%,20.8%,0)"
              />
              <path
                d="M12.5 0L0 25l12.5 25L25 25 12.5 0zm25 50L25 75l12.5 25L50 75 37.5 50z"
                stroke-width="1"
                stroke="none"
                fill="hsla(0,0%,85.1%,0.25)"
                className="colorOne"
              />
              <path
                d="M37.5 0L50 25 37.5 50 25 25zm-25 50L25 75l-12.5 25L0 75z"
                stroke-width="1"
                stroke="none"
                fill="hsla(183,30.6%,33.9%,0.25)"
                className="colorTwo"
              />
            </pattern>
          </defs>
          <rect
            width="800%"
            height="800%"
            transform="translate(0,0)"
            fill="url(#a)"
          />
        </svg>
      </div>
      <div className="projects-container">
        <div className="dev-title">
          Software Development
          <div
            className={show ? "dropdown-arrow up" : "dropdown-arrow"}
            onClick={() => setShow(!show)}
          >
            ^
          </div>
        </div>
        <div className="project-container">
          <hr />
          <div className="java project-one">
            <div className="title">
              Minesweeper | Object Oriented Programming
            </div>
            <div className="projectDesc">
              <div className="images">
                <img
                  src="/images/project-files/snapshot_java.png"
                  alt="minesweeper-snapshot"
                />
              </div>
              <div className="tools">
                <div className="tool">Java</div>
                <div className="tool">Object Oriented Programming</div>
              </div>
              <span>
                Developed a minesweeper game using Java (swing and awt gui
                libraries). Focuses heavily on OOP techniques.
              </span>
              <Link
                to="https://github.com/SweetReap/Minesweeper-JAVA"
                className="button"
              >
                <button>Link to GitHub Repo</button>
              </Link>
            </div>
          </div>
          <hr />
        </div>
        <div className="dev-title">
          Game Development
          <div
            className={show ? "dropdown-arrow up" : "dropdown-arrow"}
            onClick={() => setShow(!show)}
          >
            ^
          </div>
        </div>
        <div className="project-container">
          <hr />
          <div className="itch">
            <div className="title">Itch.io Showcase</div>
            <div className="projectDesc">
              <div className="images">
                <img src="/images/project-files/jC7LQi.gif" alt="" />
                <img
                  src="/images/project-files/kaiju_jamv3_1.gif"
                  alt="game-display-gif-kaiju-attack"
                />
                <img src="/images/project-files/kaiju_jamv2_0.gif" alt="" />
                <img src="/images/project-files/jumpingman_1.gif" alt="" />
              </div>
              <div className="tools">
                <div className="tool">PICO-8 | LUA</div>
                <div className="tool">Aesprite</div>
                <div className="tool">Adobe Photoshop</div>
                <div className="tool">Object Oriented Programming</div>
              </div>
              <span>
                Included in this section are my all of the{" "}
                <b>released game prototypes</b> on Itch.IO Take a look at the
                projects I've worked on and collaborated in!
              </span>

              <Link
                to="https://sweet-apple-potatoes.itch.io"
                className="button"
              >
                <button>ITCH.IO PROFILE</button>
              </Link>
            </div>
          </div>
          <hr />
        </div>

        <div className="dev-title">
          Visual Design | Instructional Development
          <div
            className={show ? "dropdown-arrow up" : "dropdown-arrow"}
            onClick={() => setShow(!show)}
          >
            ^
          </div>
        </div>
        <div className="project-container">
          <hr />
          <div className="lehman">
            <div className="title">
              Lehman College | College Assistant Projects
            </div>

            <div className="projectDesc">
              <div className="images">
                <img
                  src="/images/project-files/lehmantitleimg.png"
                  alt="lehman-title-image"
                />
              </div>
              <div className="tools">
                <div className="tool">Adobe Illustrator</div>
                <div className="tool">Adobe After Effects</div>
                <div className="tool">Adobe Photoshop</div>
                <div className="tool">Camtasia</div>
                <div className="tool">Adobe XD</div>
                <div className="tool">Peoplesoft</div>
              </div>
              <span>
                I've worked on many{" "}
                <b>educational and promotional materials </b>
                for the <b>Student Success Initiatives</b> team. While being
                lightly supervised by the Director and Assistant Director of the
                team, many{" "}
                <b>flyers, videos, and interactive eLearning modules </b>were
                designed and developed to ease the learning curve of newly
                updated online learning platforms.
              </span>
              {/* <Link to="/lehman" className="button">
                <button>EXPLORE</button>
              </Link> */}
            </div>
          </div>
          <hr />
        </div>

        <div className="dev-title">
          Web Development
          <div
            className={show ? "dropdown-arrow up" : "dropdown-arrow"}
            onClick={() => setShow(!show)}
          >
            ^
          </div>
        </div>
        <div className="project-container">
          <hr />
          <div className="gnnyc">
            <div className="title">Graffiti n' NYC | In Development</div>
            <div className="projectDesc">
              <div className="images">
                <img src="/images/project-files/screenshot_gnnyc.png" alt="" />
              </div>
              <div className="tools">
                <div className="tool">Adobe Photoshop</div>
                <div className="tool">Vanilla JavaScript</div>
                <div className="tool">HTML & CSS</div>
                <div className="tool">API Implementation</div>
              </div>
              <span>
                I participated in{" "}
                <b>Lehman's 2023 Hackathon partnered with Postman.</b> My team
                was tasked for 5 hours to develop an API intergrated tool with
                New Yorkers in mind. <br /> We developed a
                <b> vanilla JavaScript</b> web application that searches for art
                galleries based on the user's inputted zipcode.
                <b>
                  Google Javascript Maps API and OpenNYC API were intergrated
                  into the app.
                </b>
              </span>
              <p className="footnote">
                This website is still in development, and we will be continuing
                to add multiple features to the app.
              </p>
              <Link
                to="https://cheerful-croissant-7943f1.netlify.app/"
                className="button"
              >
                <button>Link to Webpage</button>
              </Link>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
