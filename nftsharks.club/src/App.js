import React from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import '../src/index.css'
import Advertising from './pages/Advertising';
import ScrollTop from './components/ScrollTop';
import About from './pages/About';
import Section1 from './pages/Section1';
import Footer from './components/Footer';
import OurService from './pages/OurService';
import Contact from './pages/Contact';




const App = () => {
  return (
  <>
 
  <Nav/>
  <Home/>
  <Section1/>
  <About/>
  <OurService/>
  <Advertising/>
  <Contact/>
  <Footer/>
  <ScrollTop/>

  </>
  )
}

export default App;
