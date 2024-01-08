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

    const rotatingsquare = <div className='back'/>;
    return (   
        <div className="container">

             <div className="spline-container" data-aos='fade-up'>
                <div className="rotatingsquares">
                    {rotatingsquare}
                    {rotatingsquare}
                    {rotatingsquare}
                    {rotatingsquare}
                    {rotatingsquare}
                </div>
                
                <Spline_Sam />
            </div>

            <div className='intro-container' data-aos="fade-down">

                <div className="intro">

                    <div className="intro-one">Hi! I Am</div>

                    <div className='name-container'>
                      <div className="name">
                        Samantha Reape
                      </div>
                    </div>

                    <div className="role-title">Game Developer | Web Designer | Digital Artist</div>

                    <hr/>
                    <p className='about-me-short'>
                        I'm currently a student in NYC who strives to improve the user experience and create solutions to modern problems. 
                        <br/> 
                        Along with that, I have a huge passion for game development, web design, and UI/UX design.
                    </p>
                    <hr />
                    <Link to="/projects">
                    <button> EXPLORE MORE </button>
                    </Link>
                </div>

            </div>
        </div>      
    );
}