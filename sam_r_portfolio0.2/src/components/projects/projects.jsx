import "./styles.scss";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import Lehman_Project_Popup from '../lehman project/Lehman_Project_Popup';

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true,
      anchorPlacement: "top-bottom",
      delay: "0",
    });
  }, []);

  return (
    //TODO: create a component for the projects that will read from one JSON file.
    <div>
      <div className="projects-container" data-aos="fade-up">
        <div className="dev-title">
          Game Development
          <div className="dropdown-arrow">^</div>
        </div>
        <div className="project-container hidden">
          <hr />
          <div className="itch">
            <div className="title">Itch.io Showcase</div>
            <div className="projectDesc">
              <div className="images">
                <img src="public/images/project-files/jC7LQi.gif" alt="" />
                <img
                  src="public/images/project-files/kaiju_jamv3_1.gif"
                  alt="game-display-gif-kaiju-attack"
                />
                <img
                  src="public/images/project-files/kaiju_jamv2_0.gif"
                  alt=""
                />
                <img
                  src="public/images/project-files/jumpingman_1.gif"
                  alt=""
                />
              </div>
              <span>
                Take a look at the projects I've worked on and collaborated in!
                It might look very empty now, but soon, there will be so many
                little projects here that you will enjoy!
              </span>
              <div className="button">
                <button>ITCH.IO PROFILE</button>
              </div>
            </div>
          </div>
          <hr />
        </div>

        <div className="dev-title">
          Visual Design | Instructional Development
          <div className="dropdown-arrow">^</div>
        </div>
        <div className="project-container hidden">
          <hr />
          <div className="lehman">
            <div className="title">
              Lehman College | College Assistant Projects
            </div>

            <div className="projectDesc">
              <div className="images">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                perferendis repellat, ex tenetur quod ipsum consequuntur enim
                facere vel impedit doloribus quos corrupti aspernatur architecto
                id dolore omnis mollitia aperiam.
              </span>
              <div className="button">
                <button>EXPLORE</button>
              </div>
            </div>
          </div>
          <hr />
        </div>

        <div className="dev-title">
          Web Development
          <div className="dropdown-arrow">^</div>
        </div>
        <div className="project-container hidden">
          <hr />
          <div className="gnnyc">
            <div className="title">Graffiti n' NYC | In Development</div>
            <div className="projectDesc">
              <div className="images">
                <img src="" alt="" />
              </div>
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
                nostrum nobis accusantium corrupti id consequuntur natus
                quisquam. Amet alias praesentium exercitationem architecto at
                omnis eum nisi numquam, recusandae aliquam commodi.
              </span>
              <div className="button">
                <button>Link to Webpage</button>
              </div>
            </div>
          </div>
          <hr />
        </div>

        <div className="dev-title">
          Software Development
          <div className="dropdown-arrow">^</div>
        </div>
        <div className="project-container hidden">
          <hr />
          <div className="java project-one">
            <div className="title">
              Minesweeper | Object Oriented Programming
            </div>
            <div className="projectDesc">
              <div className="images">
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                consequuntur iusto amet vitae totam sit sunt repellendus
                suscipit aliquam voluptatibus libero ratione dolore
                necessitatibus molestias quisquam, iste praesentium sequi eaque.
              </span>
              <div className="button">
                <button>Link to GitHub Repo</button>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
