import logo from './logo.svg';
import { Routes, Route } from "react-router-dom"

import './App.css';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Blog from './Blog';
import Contact from './Contact';

function App() {
  return (
    <>
    
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/About" element={ <About/> } />
        <Route path="/Gallery" element={ <Gallery/> } />
        <Route path="/Blog" element={ <Blog/> } />
        <Route path="/Contact" element={ <Contact/> } />

      </Routes>
      
    </>
    );
}

export default App;
