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
  return (
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
                strokeWidth="1"
                stroke="none"
                fill="hsla(0,0%,85.1%,0.25)"
                className="colorOne"
              />
              <path
                d="M37.5 0L50 25 37.5 50 25 25zm-25 50L25 75l-12.5 25L0 75z"
                strokeWidth="1"
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
      {populate_page}
    </div>
  );
}
