import Spline_Sam from '../../assets/3D/spline_sam';
import {SiAdobeillustrator, SiCsharp, SiProcessingfoundation, SiAdobephotoshop, SiAdobeaftereffects} from 'react-icons/si';
import './styles.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home(){

    useEffect(() =>{
        AOS.init({
            duration: 1000,
            mirror:true,
            anchorPlacement: 'top-bottom',
            delay:'0'
        });
    }, []);

    return(
        
        <div className="Container">
            <div className='intro-container' data-aos="fade-down">
                <div className="intro">
                    <p className="small-txt-title">Hi! I'm...</p>
                    <div className='name-logo'>
                      <img src='./images/final-logo/SVG/fn-light.svg' height={'150px'}/>
                      <img src='./images/final-logo/SVG/ln-light.svg' height={'150px'}/>
                   </div>
                    <p className="role-title">Game Developer | Web Developer | Digital Artist</p>
                    {/* <hr/> */}
                    <p className='about-me-short'>
                        I'm currently a student in NYC who strives to improve the user experience and create solutions to modern problems. 
                        <br/> 
                        Along with that, I have a huge passion for game development, web design, and UI/UX design.
                        </p>
                    {/* <button className='about-me-more'>| Explore More |</button> */}
                </div>

                <div className="image-right-side" data-aos='fade-up' data-aos-delay='100'>
                    <div className='container-spline-head'>
                        <Spline_Sam />
                    </div>
                </div>
            </div>

            <div className='skills-container' data-aos="fade-down">
                <div className='skill-spline-sam'>
                   <i className="fa-solid fa-circle-exclamation error"></i>
                   <h4><b>ERROR!</b> <br></br> Portfolio is still in development!</h4>
                </div>
                
                <div className='skills-list' data-aos="flip-down">
                        <h1>Skills</h1> {/* add some logos */}
                        
                        <ul data-aos="fade-down">
                            <h3>Tools</h3>
                            <div className='skills'>
                                <li>
                                    <i className="fa-brands fa-react"></i>
                                    <a>React.JS</a>
                                </li>
                                
                                <li>
                                    <i className="fa-brands fa-unity"></i>
                                    <a>Unity</a>
                                </li>
                                <li>
                                    <SiAdobephotoshop className='icon-react'/>
                                    <a>Adobe Photoshop</a>
                                </li>
                                <li>
                                    <SiAdobeillustrator className='icon-react'/>
                                    <a>Adobe Illustrator</a>
                                </li>
                                <li>
                                    <SiAdobeaftereffects className='icon-react'/>
                                    <a>Adobe After Effects</a>
                                </li>
                            </div>
                            
                            <h3>Languages</h3>
                            <div className='skills'>
                                <li>
                                    <i className="fa-brands fa-java"></i>
                                    <a>Java</a>
                                </li>
                                <li>
                                    <i className="fa-brands fa-square-js"></i>
                                    <a>JavaScript</a>
                                </li>
                                <li>
                                    <SiCsharp className='icon-react' />
                                    <a>C-Sharp</a>
                                </li>
                                <li>
                                    <SiProcessingfoundation className='icon-react'/>
                                    <a>Processing 4</a>
                                </li>
                            </div>
                        </ul>
                </div>    
            </div>
        </div>
        
    );
}