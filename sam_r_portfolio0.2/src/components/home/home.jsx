import Spline_Sam from "../../assets/3D/spline_sam";
import "./styles.scss";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import About_Me from "../about_me/about-me";
import Heading from "../bits/Bits";

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
              <Heading str="Samantha Reape"/>
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
                create entertaining, thoughtful, and engaging content.
              </p>
              <hr />
              <Link to="/projects" className="button big-link">
                 EXPLORE PROJECTS 
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
