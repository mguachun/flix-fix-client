import React from 'react'

const MovieCard = ({title, year}) => {
    return (
        <div>
            <h2>Title:{title}</h2>
            <h2>Year:{year}</h2>
        </div>
    )
}
export default MovieCard;
