import {SiAdobeillustrator, SiCsharp, SiProcessingfoundation, SiAdobephotoshop, SiAdobeaftereffects} from 'react-icons/si';
import './style.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function About_Me(){
    return(
        <div className='skills-container' data-aos="fade-down">
        <div className='skill-spline-sam'>
           <i className="fa-solid fa-circle-exclamation error"></i>
           <h4><b>ERROR!</b> <br></br> Character is still in development!</h4>
        </div>
        
        <div className='skills-list' data-aos="flip-down">
                <h1>Skills</h1> 
                
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
    );
}