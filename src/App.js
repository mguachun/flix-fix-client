import React from "react";
import { Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import './App.css';
import About from "./containers/About";
import Home from "./containers/Home";
import HowTo from "./components/HowTo"
import MovieForm from "./components/forms/MovieForm"
function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie-form" element={<MovieForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-to" element={<HowTo />} />
        
    </Routes>
    </div>
  );
}

export default App;

