import { useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <Link to="/" className="page-title">
        <img
          src="./images/final-logo/SVG/logo-white.svg"
          alt="logo"
          width="65px"
        />
      </Link>
      <ul>
        <li>
          <Link to="/">
            <i className="fa-solid fa-house-user"></i>
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <i className="fa-solid fa-note-sticky"></i>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/about_me">
            <i className="fa-solid fa-user-secret"></i>
            About Me
          </Link>
        </li>{" "}
        <li>
          <Link to="https://drive.google.com/file/d/163nekiodB_L5qxJry9-NgoLZhOP2rLSc/view?usp=share_link">
            <i className="fa-solid fa-file"></i>
            Resume
          </Link>
        </li>
      </ul>
      <div className="contact-div">
        <ul>
          <Link to="https://github.com/SweetReap/">
            <li className="fa-brands fa-github" />
          </Link>
          <Link to="https://linkedin.com/in/sam-reape">
            <li className="fa-brands fa-linkedin" />
          </Link>
        </ul>
      </div>
      {/* <div className='color-theme-toggle'>
            <p>Color Mode</p>
            <button>0</button>
        </div> */}
    </nav>
  );
}
