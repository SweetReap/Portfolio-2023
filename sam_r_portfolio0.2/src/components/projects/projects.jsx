import './styles.scss'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
// import Lehman_Project_Popup from '../lehman project/Lehman_Project_Popup';

export default function Projects(){

    useEffect(() =>{
        AOS.init({
            duration: 1000,
            mirror:true,
            anchorPlacement: 'top-bottom',
            delay:'0'
        });
    }, []);

    return(
        //TODO: create a component for the projects that will read from one JSON file.
        <div>
        <div className="projects-container" data-aos="fade-down">
            <div className='dev-title'> <p>Game Development</p>  </div> 
            <div className='games-container'>
                

                <div className="project-box-container games-box">
                    <h1>KAIJU ATTACK!</h1>
                    <h3>Kaiju Attack is a small game where you, the soldier has to defeat the kaiju destroying the city!! But even in the kaiju's death, they will still rain fire and lighting on you*!!!</h3>
                    <h2>PICO-8</h2> <h2>LUA</h2>
                    <iframe className='itch_banner' frameborder="0" src="https://itch.io/embed/1063258?linkback=true&amp;border_width=2&amp;bg_color=4f6781&amp;fg_color=d2d5d7&amp;link_color=9e285b" width="210" height="169"><a href="https://sweet-apple-potatoes.itch.io/kaiju-attack">KAIJU ATTACK!</a></iframe>
                </div>
                <div className="project-box-container games-box">
                    <h1>Jumping Man | Farmer Man</h1>
                    <h3>Jumping Man is a small game made from PICO-8 that revolves around jumping and catching fruit.</h3>
                    <h2>PICO-8</h2> <h2>LUA</h2>
                    <iframe className='itch_banner' frameborder="0" src="https://itch.io/embed/567996?bg_color=0484d1&amp;link_color=ffe762" width="208" height="167"><a href="https://sweet-apple-potatoes.itch.io/jumpman">Jumping Man!</a></iframe>
                </div>
                <div className="project-box-container games-box">
                    <h1>Evil Pot Thingy!</h1>
                   
                    <h3>A game about you falling and the Evil Plant!</h3>
                    <h2>Processing 3</h2> <h2>Aesprite</h2>
                    <iframe className='itch_banner' frameborder="0" src="https://itch.io/embed/404594?border_width=0&amp;bg_color=4b56eb&amp;link_color=d10312" width="206" height="165"><a href="https://sweet-apple-potatoes.itch.io/evil-pot-thingy">Evil Pot Thingy !</a></iframe>
                </div>
            </div>

            <div className='dev-title'><p>Visual Design</p></div>
            <div className='design-container'>
                       
                <div className="project-box-container design-box lehman-project">

                    <div className='left-side'>

                        <div className="flyer-sample">
                            <div className="overlap-group">
                                <img className="final-choice" alt="Quick-How-To" src="/dist/images/Lehman Account@0.75x.png" />
                                <img className="financial-aid" alt="Financial Aid" src="/dist/images/financial-aid.png" />
                                <img className="help-hub-flyer" alt="Help Hub" src="/dist/images/Idea-One.png" />
                            </div>
                        </div>
                        <div className='lehman college logo' > Help</div>
                    </div>

                    <div className='right-side'>

                        <div className="label-header">
                            <div className="text-wrapper"><p>Lehman College | Various</p></div>
                        </div>

                        <div className="tools-used">
                            <div className="element">
                                <div className="overlap-group">
                                    <div className="text-wrapper">Adobe Illustrator</div>
                                </div>
                            </div>
                            <div className="element">
                                <div className="overlap-group">
                                    <div className="text-wrapper">Adobe After Effects</div>
                                </div>
                            </div>
                            <div className="element">
                                <div className="overlap-group">
                                    <div className="text-wrapper">Camtasia 2023</div>
                                </div>
                            </div>     
                        </div>

                        <p className="description">
                            <span className="text-wrapper-desc">
                                Tasked to create a variation of visual materials, such as flyers, instructional videos, and interactive
                                learning modules to guide Lehman students to our student support services and prepare Lehman staff for
                                advising students.
                                <br />
                                <br />
                                Includes visual designs for the Lehman Help Hub, and Lehman Navigate.
                           </span>
                        </p>

                        <button>
                                <div className="text-wrapper">Details</div> 
                        </button>
                    </div>

                </div>
                    
           </div>
           {/* <div className='web-dev-container'>
            <div className='dev-title'><p>Web Development</p></div>

           <div className="project-box-container project-img4">
                <h1>Box One</h1>
                <h3>Example Text</h3>

                <p>add img here</p>
                <img src=''></img>
            </div>
            <div className="project-box-container project-img4">
                <h1>Box One</h1>
                <h3>Example Text</h3>

                <p>add img here</p>
                <img src=''></img>
            </div>
            <div className="project-box-container project-img4">
                <h1>Box One</h1>
                <h3>Example Text</h3>

                <p>add img here</p>
                <img src=''></img>
            </div>

           </div> */
           }


        

           {/* <div className='soft-dev-container'>
            <div className='dev-title'><p>Software Development</p></div>

           <div className="project-box-container project-img4">
                <h1>Box One</h1>
                <h3>Example Text</h3>

                <p>add img here</p>
                <img src=''></img>
            </div>
            <div className="project-box-container project-img4">
                <h1>Box One</h1>
                <h3>Example Text</h3>

                <p>add img here</p>
                <img src=''></img>
            </div>
            <div className="project-box-container project-img4">
                <h1>Box One</h1>
                <h3>Example Text</h3>

                <p>add img here</p>
                <img src=''></img>
            </div>

           </div> */}
         
        </div>
        </div>
    );
}