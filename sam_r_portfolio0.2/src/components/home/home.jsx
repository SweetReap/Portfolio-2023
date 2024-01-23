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

  const rotatingsquare = <div className="back" />;
  return (
    <div className="home-page">
      <div className="container">
        {/* <div className="loading">
          <div className="text-container">Loading...</div>
        </div> */}
        <div className="spline-container" data-aos="zoom-in">
          <div className="rotatingsquares">
            {rotatingsquare}
            {rotatingsquare}
            {rotatingsquare}
            {rotatingsquare}
            {rotatingsquare}
            {rotatingsquare}
            {rotatingsquare}
            {rotatingsquare}
            {rotatingsquare}
            {rotatingsquare}
          </div>

          <Spline_Sam />
        </div>

        <div className="intro-container" data-aos="fade-down">
          <div className="intro">
            <div className="intro-one">Hi! I Am</div>
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
            </div>

            <div className="role-title">
              Game Developer | React.JS Developer | Java Developer | Digital
              Artist | Fountain Pen Connoisseur
            </div>

            <hr />
            <p className="about-me-short">
              I'm currently a student in NYC who strives to{" "}
              <b>improve the user experience</b>, create solutions to modern
              problems, and <b>exemplify the personality</b> of products and
              applications.
              <br />
              Strives to combine my passion for the creative arts with my
              interests in game development, web design, and UI/UX design.
            </p>
            <hr />

            <Link to="/projects" className="button">
              <button> EXPLORE PROJECTS </button>
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <About_Me />

    </div>
  );
}
