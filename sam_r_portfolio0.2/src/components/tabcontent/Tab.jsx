import { Link } from "react-router-dom";
import "../tabcontent/style.scss";

export default function Tab() {
  return (
    <>
      <div className="container">
        <hr />
        <div className="type-title">
          {type}
          <div className="dropdown-arrow">^</div>
        </div>
        <div className="project">
          <div className="title">{title}</div>
          <div className="inner-container">
            <div className="images">
              {imgs}
            </div>
            <div className="tools">{tools}</div>
            <span className="description">{desc}</span>
          </div>
          <Link to={"*"} className="button"><button>{buttonText}</button></Link>
        </div>
      </div>
    </>
  );
}


// This will be the interface for showcasing projects based on the information given in the json file