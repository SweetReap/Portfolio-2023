import "./style.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";

export default function Slideshow() {
  let images = [
    "https://i.imgur.com/xaLoOFT.jpg",
    "https://i.imgur.com/8Cp0KRy.png",
    "https://i.imgur.com/eeKzgC2.png",
    "https://i.imgur.com/fBZFSaP.png",
    "https://i.imgur.com/vBTNfz2.png",
    "https://i.imgur.com/bUVTNXW.png",
    "https://i.imgur.com/swQnl21.png",
    "https://i.imgur.com/oDlyWEa.png",
  ];

  const [image, setImage] = useState(0);
  const [action, setAction] = useState("flip-left");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: false,
      delay: "15ms",
    });
  }, []);

  return (
    <>
      <div className="container-slideshow">
        <div className="left arrow">
          <button type="button" onClick={()=>{
            setAction("flip-left")
            if(image === 0){
              setImage(images.length - 1)
            }else{
              setImage(image - 1)
            }
          }}>
            {" "}
            <i className="fa-solid fa-arrow-left"></i>{" "}
          </button>
        </div>
        <div className="image-container">
          <img src={images[image]} alt="example of my work" data-aos={action} referrerPolicy="no-referrer" width={"500px"}/>
        </div>
        <div className="right arrow button ">
          <button type="button" onClick={()=>{
            setAction("flip-right")
            if(image === images.length - 1){
              setImage(0)
            }else{
              setImage(image + 1)
            }
          }}>
            {" "}
            <i className="fa-solid fa-arrow-right"></i>{" "}
          </button>
        </div>
        <br />
      </div>
      <p> {image} of {images.length-1} </p>
    </>
  );
}
