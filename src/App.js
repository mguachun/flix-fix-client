import React from "react";
import { Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import './App.css';
import About from "./containers/About";
import Home from "./containers/Home";
import HowTo from "./components/HowTo"
import MovieForm from "./components/forms/MovieForm"
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
// import './custom.scss';



// function App() {
class App extends React.Component{
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    fetch("http://[::1]:3000")
    .then(resp => resp.json())
    .then(m => {
      this.setState({
        movies: m
      })
    })
    
  }

render() {
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
}

export default App;

