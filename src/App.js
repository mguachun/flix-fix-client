import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import {
  Routes,
  Link,
  Route
} from "react-router-dom";
import About from "./containers/About";
import Home from "./containers/Home";
import HowTo from "./components/HowTo";
import MovieForm from "./components/forms/MovieForm";

// BACKEND USES LOCALHOST3000
// FRONTEND USES LOCALHOST3001

function App() {
  return (
    // <BrowserRouter>
      <div>
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to="/">FlixFix</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/movie-form">Track a Flick</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/how-to">How To</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
        <div>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="movie-form" element={<MovieForm />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/how-to" element={<HowTo />}/>
          </Routes>
        </div>

        </div>
    // </BrowserRouter>
  );
}

export default App;

// function App() {
// class App extends React.Component{

//   constructor(props) {
//     super(props);

//     this.state = {
//       movies: null
//     };
//   }


// //   componentDidMount() {
// //     fetch('localhost:3000/movies')
// //     .then(response => {
// //       if (!response.ok) {
// //         throw new Error(response.statusText)
// //       }
// //       return response.json()
// //     }).catch(err=>{
// //     console.log(err)
// // })
//       // .then(response => response.json())
//       // .then(data => console.log(data));
//       // .then(data => this.setState({ movies: data.all }));
//   // }
