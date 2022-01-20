import React from 'react'
import { Card } from 'react-bootstrap'

const MovieCard = ({title, year, director, review, genre}) => {
    return (
        <div>
           
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    Directed by: {director}
                    <br></br>
                    Review: {review}
                    <br></br>
                    <h5>Year:{year}</h5>
                    <h5>Genre:{genre}</h5>
                    </Card.Text>
                    
                </Card.Body>
            </Card>
          
            
        </div>
    )
}
export default MovieCard;
