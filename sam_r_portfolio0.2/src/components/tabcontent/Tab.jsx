import { Link } from "react-router-dom";
import "../tabcontent/style.scss";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
export default function Tab(props) {
  const [show, setShow] = useState(true);

  const toggleShow = () => {
    setShow(!show);
  };

  const imgs = (
    <div className="images">
      {props.imgs &&
        props.imgs.map((img, index) => (
          <img src={img} key={index} alt={`Project image ${index + 1}`} />
        ))}
    </div>
  );
  const tools = (
    <div className="tools">
      {props.tools &&
        props.tools.map((name, index) => (
          <div key={index} className="tool">
            {name}
          </div>
        ))}
    </div>
  );
  return (
    <>
      <div className="projects-container">
        <div className="type-title">
          {props.type}
          <div
            className={show ? "dropdown-arrow up" : "dropdown-arrow"}
            onClick={toggleShow}
          >
            <FaAngleUp />
          </div>
        </div>
        {show && (
          <div className="project">
            <div className="title">{props.title}</div>
            <div className="inner-container">
              {imgs}
              {tools}
              <span className="description">{props.desc}</span>
            </div>
            <Link to={props.link} className="button">
              {props.buttonText}
            </Link>
          </div>
        )}
      </div>
      <hr />
    </>
  );
}

// This is the interface for showcasing projects based on the information given in the json file
