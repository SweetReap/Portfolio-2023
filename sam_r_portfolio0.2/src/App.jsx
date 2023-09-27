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

      <button type='button'>Click here to Enter!</button>

    </div>
  )
}

export default App
