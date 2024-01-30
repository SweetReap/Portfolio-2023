import React from "react";
import "./style.scss";

export default function Lehman() {
  return (
    <>
      <div className="header">
        <div className="title-project">STUDENT SUCCESS INITIATIVES</div>
        <div className="preview">
          <img
            src="/images/project-files/lehmantitleimg.png"
            alt="lehman-title-image"
            height={"400px"}
          />
        </div>
      </div>
      <div className="container">
        <div className="one">
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
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
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
          </article>
        </div>
        <div className="two">
          <article>
            <div className="title">Help Hub</div>
            <div className="slideshow">yes{/* Add slideshow here */}</div>
            An vidit dictas doctus est. Mel id audire convenire, aperiam
            invidunt voluptaria his ex, eum et saepe nonumes iracundia! Vix ad
            solet fuisset. Has ne ceteros accusamus, vidit conceptam ei usu,
            decore exerci scripta ad est. Nec ea hinc harum suscipit, tamquam
            imperdiet ad eos! Per an everti detracto sapientem. His consul
            tibique dignissim eu, suas paulo quaeque eos at. Nam te sanctus
            facilisi, vel ne solet iisque. Aeterno fuisset nec id, choro tempor
            constituam eu his, nam mandamus consectetuer an.
          </article>
        </div>

        <aside>
          <div className="title">Tools Used</div>
          <div className="tools">
            <div className="tool">Photoshop</div>
            <div className="tool">Illustrator</div>
            <div className="tool">Camtasia</div>
            <div className="tool">After Effects</div>
            <div className="tool">Adobe XD</div>
          </div>
        </aside>
      </div>
    </>
  );
}
