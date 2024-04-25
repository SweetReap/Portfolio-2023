import "./style.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";

export default function Slideshow(props) {

  const [image, setImage] = useState(0);
  const [action, setAction] = useState("flip-left");

  useEffect(() => {
    AOS.init({
      duration: 500,
      mirror: false,
      delay: "15ms",
    });
  }, []);

  return (
    <>
      <div className="container-slideshow">
        <div className="left arrow">
          <button
            type="button"
            onClick={() => {
              setAction("flip-left");
              if (image === 0) {
                setImage(props.content.length - 1);
              } else {
                setImage(image - 1);
              }
            }}
          >
            {" "}
            <i className="fa-solid fa-arrow-left"></i>{" "}
          </button>
        </div>
        <div className="image-container">
          <img
            src={props.content[image]}
            alt="example of my work"
            data-aos={action}
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="right arrow button ">
          <button
            type="button"
            onClick={() => {
              setAction("flip-right");
              if (image === props.content.length - 1) {
                setImage(0);
              } else {
                setImage(image + 1);
              }
            }}
          >
            {" "}
            <i className="fa-solid fa-arrow-right"></i>{" "}
          </button>
        </div>
        <br />
      </div>
      <p>
        {" "}
        {image} of {props.content.length - 1}{" "}
      </p>
    </>
  );
}
