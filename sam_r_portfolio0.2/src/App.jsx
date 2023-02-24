import './App.scss'
import About_Me from './components/about_me/about-me'
import Contact_Me from './components/contact_me/contact-me'
import Navbar from './components/nav-bar/navbar.jsx'
import Projects from './components/projects/projects'
import Home from './components/home/home'
import {Route, Routes} from 'react-router-dom'

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <div className='route-container'>
      <Routes>
          <Route path = "/home" element = {<Home />} />
          <Route path = "/about_me" element = {<About_Me />} />
          <Route path = "/contact_me" element = {<Contact_Me />} />
          <Route path = "/projects" element = {<Projects />} />
      </Routes>
      </div>
      
      <div className='to-do'>
                <hr/>
                <h1 className='to-do-head'>TO-DO LIST</h1>
                <ol>
                    {/* <li> <b>Site</b> : Fix navigation. </li> */}
                    {/* <li><b>Design</b>: Make Navigation bar look more polished.</li> */}
                    <li>Experiment with Animations</li>
                    <li>Fix some design choices made here</li>
                    <li><b>Design</b>: Create logos and character actions.</li>
                    <li><b>Design</b>: Create and Design 3D models for each page, starting with: <b>Home Page</b>.</li>
                </ol>
                <hr/>
      </div>

    </div>
  )
}

export default App
