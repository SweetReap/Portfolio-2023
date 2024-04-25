import React from "react";
import "./style.scss";
import Slideshow from "./sldeshow";

export default function Lehman() {
  const images_one = [
    "https://i.imgur.com/vBTNfz2.png",
    "https://i.imgur.com/bUVTNXW.png",
    "https://i.imgur.com/swQnl21.png",
    "https://i.imgur.com/oDlyWEa.png",
    "https://i.imgur.com/auK88x4.jpg",
    "https://i.imgur.com/EDvxSlP.jpg",
  ];
  const images_two = [
    "https://i.imgur.com/FyIfx2q.jpg",
    "https://i.imgur.com/XLvHm3G.jpg",
    "https://i.imgur.com/FH73pcB.jpg",
  ];

  return (
    <>
      <div className="header">
        <div className="title-project">STUDENT SUCCESS INITIATIVES</div>
        <div className="preview">
          <img
            src="/images/project-files/lehmantitleimg.png"
            alt="lehman-title-image"
            height={"300px"}
          />
        </div>
      </div>
      <div className="container">
        <div className="content">
          <article>
            <div className="title">Lehman Navigate</div>
            <div className="video">
              <div className="embed">
                <iframe
                  className="player"
                  width="560"
                  height="315"
                  src="https://www.youtube-nocookie.com/embed/vzDTQ9U8S_s?si=WajgVu5WmjyUl6tM"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media;picture-in-picture; web-share"
                  allowFullscreen="true"
                ></iframe>
              </div>
              <div className="context">Youtube Video Example For Navigate</div>
            </div>
            <br />
            Lehman Navigate is a web tool that students use to connect with
            their advisors and other department faculties. I was tasked to
            create tutorial videos about Navigate and how to use it properly.
            I've also designed the prototype for the{" "}
            <a
              className="link"
              href="https://drive.google.com/drive/folders/1ayzY3FnrxLZOcYOq_IglL5M1uWvnIfBP?usp=sharing"
            >
              <b>eLearning Interactive Module</b>
            </a>{" "}
            using Adobe XD.
            <br />
            <br />
            <a href="https://lehman.edu/navigate/student-faq/">
              <b>Link to Other Videos</b>
            </a>
            <br />
            <div className="two">
              <article>
                <div className="title">Flyers and Merchandise!</div>
                <div className="slideshow">
                  <Slideshow content={images_one} />
                </div>
                <span>
                  {" "}
                 <p> Example of my work spanning from flyers to merchandise for
                  CUNY's Transfer Explorer!</p>
                </span>
              </article>
            </div>
          </article>
          <article>
            <Slideshow content={images_two} />
            <p>Informational Diagram about CUNY Pathways </p>
          </article>
        </div>
      </div>
    </>
  );
}
