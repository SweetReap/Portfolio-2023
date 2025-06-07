import Spline_Sam from "../../assets/3D/spline_sam";
import "./styles.scss";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import About_Me from "../about_me/about-me";

export default function Home() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true,
      delay: "15s",
    });
  }, []);

  return (
    <div className="home-page">
      <Spline_Sam />
      <div className="container">
        <div className="intro-container" data-aos="fade-down">
          <div className="intro">
            <div className="name-container">
              <div className="name">
                <span>S</span>
                <span>a</span>
                <span>m</span>
                <span>a</span>
                <span>n</span>
                <span>t</span>
                <span>h</span>
                <span>a</span>
                <span> </span>
                <span>R</span>
                <span>e</span>
                <span>a</span>
                <span>p</span>
                <span>e</span>
              </div>

              <div className="role-title">
                Game and Web Developer | Digital Artist | Fountain Pen
                Connoisseur
              </div>

              <hr />
              <p className="about-me-short">
                {" "}
                <b>Improving the user experience</b>, creating solutions to
                modern problems, and <b>exemplify the personality</b> of
                products and applications.
                <br />
                <br />I combine my passion for the creative arts with my
                interests in game development, web design, and UI/UX design to
                create fun, thoughtful, and engaging content for everyone!
              </p>
              <hr />
              <Link to="/projects" className="button big-link">
                <button> EXPLORE PROJECTS </button>
              </Link>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <About_Me />
    </div>
  );
}
