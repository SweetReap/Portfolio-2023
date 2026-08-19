import "./styles.scss";
import packet from "/src/assets/packet.json";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";
import Tab from "../tabcontent/Tab";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true,
      anchorPlacement: "top-bottom",
      delay: "0",
    });
  }, []);

  const [projects] = useState(packet.projects);
  const populate_page = (
    <div>
      {projects.map((project, index) => {
        return (
          <Tab
            key={index}
            type={project.type}
            title={project.title}
            imgs={project.imgs}
            tools={project.tools}
            desc={project.desc}
            link={project.link}
            buttonText={project.buttonText}
          />
        );
      })}
    </div>
  );

  const svg_bkg = (
    <div className="background">
      <svg
        id="patternId"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="a"
            width="50"
            height="100"
            patternTransform="rotate(80)scale(5)"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="hsla(0,0%,20.8%,0)"
            />
            <path
              fill="hsla(0,0%,85.1%,0.25)"
              d="M12.5 0 0 25l12.5 25L25 25zm25 50L25 75l12.5 25L50 75z"
              className="colorOne"
            />
            <path
              fill="hsla(183,30.6%,33.9%,0.25)"
              d="M37.5 0 50 25 37.5 50 25 25zm-25 50L25 75l-12.5 25L0 75z"
              className="colorTwo"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#a)" />
      </svg>
    </div>
  );
  return (
    <div className="container">
      {svg_bkg}
      <div className="projects-container" data-aos="fade-in">
        {populate_page}
      </div>
    </div>
  );
}
