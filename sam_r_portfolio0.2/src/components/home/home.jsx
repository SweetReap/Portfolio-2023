import Spline_Sam from '../../assets/3D/spline_sam';
import './styles.scss';

export default function Home(){
    return(
        <div className="Container">

            <div className='intro-container'>
                <div className="intro">
                    <p className="small-txt-title">Hi! I'm...</p>
                    <div className='name-logo'>
                      <p>samantha reape</p>
                   </div>
                    <p className="role-title">Game Developer | Web Developer | Digital Artist</p>
                    <hr/>
                    <p className='about-me-short'>
                        I'm currently a student in NYC who strives to improve the user experience and create solutions to modern problems. 
                        <br/> Along with that, I have many interests in game development, web design and UI/UX design.
                        </p>
                    <button className='about-me-more'>| Explore More |</button>
                </div>

                <div className="image-right-side">
                    <div className='container-spline-head'>
                        <Spline_Sam />
                    </div>
                </div>
            </div>

           <div className='skills-list'>
                <h1>Skills</h1> {/* add some logos */}
                <ul>
                    <h3>Tools</h3>
                    <li>
                        <a>React.JS</a>
                    </li>
                    <li>
                        <a>Three.JS</a>
                    </li>
                    <li>
                        <a>Unity</a>
                    </li>
                    <li>
                        <a>Adobe Photoshop</a>
                    </li>
                    <li>
                        <a>Adobe Illustrator</a>
                    </li>

                    <h3>Languages</h3>
                    <li>
                        <a>Java</a>
                    </li>
                    <li>
                        <a>JavaScript</a>
                    </li>
                    <li>
                        <a>C#</a>
                    </li>
                </ul>
           </div>
        </div>
        
    );
}