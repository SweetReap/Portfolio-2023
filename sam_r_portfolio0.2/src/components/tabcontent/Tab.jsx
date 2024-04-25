import { Link } from "react-router-dom";
import "../tabcontent/style.scss";

export default function Tab(props) {
  return (
    <>
      <div className="container">
        <hr />
        <div className="type-title">
          {props.type}
          <div className="dropdown-arrow">^</div>
        </div>
        <div className="project">
          <div className="title">{props.title}</div>
          <div className="inner-container">
            <div className="images">{props.imgs}</div>
            <div className="tools">{props.tools}</div>
            <span className="description">{props.desc}</span>
          </div>
          <Link to={"*"} className="button">
            <button>{props.buttonText}</button>
          </Link>
        </div>
      </div>
    </>
  );
}

// This will be the interface for showcasing projects based on the information given in the json file
