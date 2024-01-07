import Spline_Sam from '../../assets/3D/spline_sam';
import './styles.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import { Link } from 'react-router-dom';

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
        
        <div className="container">
            <div className='intro-container' data-aos="fade-down">
                <div className="intro">
                    <p className="small-txt-title">Hi! I'm...</p>
                    <div className='name-logo'>
                      {/* <img src='./images/final-logo/SVG/fn-light.svg' />
                      <img src='./images/final-logo/SVG/ln-light.svg' /> */}
                      <img src='./images/final-logo/SVG/my-name-light.svg' />
                   </div>
                    <p className="role-title">Game Developer | Web Designer | Digital Artist</p>
                    {/* <hr/> */}
                    <p className='about-me-short'>
                        I'm currently a student in NYC who strives to improve the user experience and create solutions to modern problems. 
                        <br/> 
                        Along with that, I have a huge passion for game development, web design, and UI/UX design.
                        </p>
                    <Link to="/projects">
                    <button><p className='about-me-more'> EXPLORE MORE </p></button>
                    </Link>
                </div>

                <div className="image-right-side" data-aos='fade-up' data-aos-delay='100'>
                    <div className='container-spline-head'>
                        <Spline_Sam />
                    </div>
                </div>
            </div>

   

        </div>
        
    );
}