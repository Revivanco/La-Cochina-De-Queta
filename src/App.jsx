import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
