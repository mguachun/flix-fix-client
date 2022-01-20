import React from 'react'

const MovieCard = ({title, year, image}) => {
    return (
        <div>
            <h2>Title:{title}</h2>
            <h2>Year:{year}</h2>
            <h2>Image:{image}</h2>
        </div>
    )
}
export default MovieCard;
