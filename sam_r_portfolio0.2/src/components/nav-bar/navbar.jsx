import "./styles.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faNoteSticky,
  faUserTie,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faHouse, faNoteSticky, faUserTie, faFileLines);

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
            {/* <i className="fa-solid fa-house-user"></i> */}
            <FontAwesomeIcon icon="fa-solid fa-house" /> Home
          </Link>
        </li>
        <li>
          <Link to="/projects">
            {/* <i className="fa-solid fa-note-sticky"></i> */}
            <FontAwesomeIcon icon="fa-solid fa-note-sticky" /> Projects
          </Link>
        </li>

        <li>
          <Link
            to="https://drive.google.com/file/d/163nekiodB_L5qxJry9-NgoLZhOP2rLSc/view?usp=share_link"
            target="_blank"
            rel="nopener noreferrer"
          >
            <FontAwesomeIcon icon="fa-solid fa-file-lines" /> Resume
          </Link>
        </li>
      </ul>
      <div className="contact-div">
        <ul>
          <Link
            to="https://github.com/SweetReap/"
            target="_blank"
            rel="nopener noreferrer"
          >
            <li>LinkedIn</li>
          </Link>
          <Link
            to="https://linkedin.com/in/sam-reape"
            target="_blank"
            rel="nopener noreferrer"
          >
            <li>GitHub</li>
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
