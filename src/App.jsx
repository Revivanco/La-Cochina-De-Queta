import React from "react";
import NavBar from "./components/NavBar.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Footer from "./components/Footer.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
