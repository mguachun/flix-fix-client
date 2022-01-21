import { useState } from "react";

const initialState = {
    title: "",
    director: "",
    year: "",
    stars: "",
    review: "",
    genre: "",
  };

  function MovieForm({ onAddMovie }) {
    const [formData, setFormData] = useState(initialState);

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((r) => r.json())
        .then((newMovie) => {
            setFormData(initialState);
            onAddMovie(newMovie);

        });
    }
    return (
        <div className="card">
            <h2>Track a Flick</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                type="text"
                id="title"
                value={formData.title}
                onChange={handleChange}
                />
                  <label htmlFor="director">Director</label>
                <input
                type="text"
                id="director"
                value={formData.director}
                onChange={handleChange}
                />
                  <label htmlFor="year">Year</label>
                <input
                type="text"
                id="year"
                value={formData.year}
                onChange={handleChange}
                />
                  <label htmlFor="stars">Stars</label>
                <input
                type="text"
                id="stars"
                value={formData.stars}
                onChange={handleChange}
                />
                  <label htmlFor="review">Reveiw</label>
                <input
                type="text"
                id="review"
                value={formData.review}
                onChange={handleChange}
                />
                  <label htmlFor="genre">Genre</label>
                <input
                type="text"
                id="genre"
                value={formData.genre}
                onChange={handleChange}
                />
                <button type="submit">Submit</button>

            </form>
        </div>
    );

  }



export default MovieForm;