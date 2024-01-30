import './App.scss'
import Lehman from './components/lehman/lehman.jsx'
import About_Me from './components/about_me/about-me'
import Contact_Me from './components/contact_me/contact-me'
import Navbar from './components/nav-bar/navbar.jsx'
import Projects from './components/projects/projects'
import Home from './components/home/home'
import {Route, Routes} from 'react-router-dom'
import { findDOMNode } from 'react-dom'

function App() {

  // window.onscroll = function() {stickyNav()};
  // let navbar = document.getElementById("navbar");
  // var sticky = navbar.getBoundingClientRect(); //causes error

  // function stickyNav(){
  //   if(window.scrollY >= navbar.getBoundingClientRect()){
  //     navbar.classList.add("stick");
  //   }else{
  //     navbar.classList.remove("stick");
  //   }
  // }

  return (
    <div className="App">
      <Navbar sticky="top" />
      <div className='route-container'>
      <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/about_me" element = {<About_Me />} />
          <Route path = "/contact_me" element = {<Contact_Me />} />
          <Route path = "/projects" element = {<Projects />} />
          <Route path= "/lehman" element = {<Lehman/>}/>
      </Routes>
      </div>
     
    </div>
    
  )
}

export default App
