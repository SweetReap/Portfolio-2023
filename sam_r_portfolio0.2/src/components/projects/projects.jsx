import './styles.scss'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

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
        <div className="projects-container" data-aos="fade-down">
            <div className='games-container'>
            <div className="project-box-container project-img1">
                <h1>KAIJU ATTACK!</h1>
                <h3>Kaiju Attack is a small game where you, the soldier has to defeat the kaiju destroying the city!! But even in the kaiju's death, they will still rain fire and lighting on you*!!!</h3>
                <iframe frameborder="0" src="https://itch.io/embed/1063258?linkback=true&amp;border_width=2&amp;bg_color=4f6781&amp;fg_color=d2d5d7&amp;link_color=9e285b" width="210" height="169"><a href="https://sweet-apple-potatoes.itch.io/kaiju-attack">KAIJU ATTACK! by SweetPotato</a></iframe>
            </div>
            <div className="project-box-container project-img2">
                <h1>Jumping Man | Farmer Man</h1>
                <h3>Jumping Man is a small game made from PICO-8 that revolves around jumping and catching fruit.</h3>

                <iframe frameborder="0" src="https://itch.io/embed/567996?bg_color=0484d1&amp;link_color=ffe762" width="208" height="167"><a href="https://sweet-apple-potatoes.itch.io/jumpman">Jumping Man! by SweetPotato</a></iframe>
            </div>
            <div className="project-box-container project-img3">
                <h1>Evil Pot Thingy!</h1>
                <h3>A game about you falling and the Evil Plant!</h3>

                <iframe frameborder="0" src="https://itch.io/embed/404594?border_width=0&amp;bg_color=4b56eb&amp;link_color=d10312" width="206" height="165"><a href="https://sweet-apple-potatoes.itch.io/evil-pot-thingy">Evil Pot Thingy ! by SweetPotato</a></iframe>
            </div>
            </div>
           
           <div className='web-dev-container'>
           {/* <div className="project-box-container project-img4">
                <h1>Graffitti N' NYC - wip</h1>
                <img src=''></img>
            </div> */}
           </div>
         
        </div>
    );
}