import React from "react";
import { Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import './App.css';
import About from "./containers/About";
import Home from "./containers/Home";
function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
    </Routes>
    </div>
  );
}

export default App;

