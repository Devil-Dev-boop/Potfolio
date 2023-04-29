import "./App.css";

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components /Home";
import Skills from "./components /Skills";
import Contact from "./components /Contact";
import About from "./components /About";
import { useState } from "react";



function App() {
  const [showPic , setShowPic] = useState(false)


  const handleShowPic = () => {
    setShowPic(true)
  }
  const handleHidePic = () => {
    setShowPic(false)
  }

  return (
    <>
    <Router>
     
        <Routes>
          <Route path="/" element={<Home onShowPic={handleShowPic}/>}  />
          <Route path="/about" element={<About showpic ={showPic} onHidePic={handleHidePic}/>} />
          <Route path="/contact" element={< Contact />} />
          <Route path="/skills" element={<Skills />} />
        
        </Routes>
        
      </Router>


    </>
  );
}


export default  App ;
