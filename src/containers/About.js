import React from "react";
// import { Navbar, Nav, Container, Card } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

const About = () => {
  return (
    <div>
      <>
        <Card>
        <h1>About:</h1>
          <Card.Img variant="top" width="100%" height="auto" src="https://media.giphy.com/media/mcJIq9k8JOcJG/giphy.gif" />
          <Card.Body>
            <Card.Text>
          This app was inspired by my boyfriend and his passion for films. Every
          Sunday evening, he meets up with his friends online and they all watch a movie. Each week,
          a different person has a chance to pick a movie for the group. Though, a common problem they 
          face is keeping track of the movies they've seen. Flix-Fix is an app to answer to this
          problem!




      
            </Card.Text>
          </Card.Body>
        </Card>
        
      </>

    </div>



  );
};
export default About;