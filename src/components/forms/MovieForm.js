import { Component } from 'react';
class MovieForm extends Component {
    state = {
        title: '',
        director: '',
        year: '',
        stars: '',
        review: '',
        genre: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.calue
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.title, this.state.director, this.state.year, this.state.stars,
            this.state.review, this.state.genre);
        this.setState({
            title: '',
            director: '',
            year: '',
            stars: '',
            review: '',
            genre: ''
        });
    };

    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit}>
                <h1>Track a Movie</h1>
                <div>
                <label>Title:</label>
                <input type="text" value={this.state.title} onChange={this.handleChange} name="title"/>
                </div>
                <br></br>
                <div>
                <label>Director:</label>
                <input type="text" value={this.state.director} onChange={this.handleChange} name="director"/>
                </div>
                <br></br>
                <div>
                <label>Year:</label>
                <input type="text" value={this.state.year} onChange={this.handleChange} name="year"/>
                </div>
                <br></br>
                <div>
                <label>Review:</label>
                {/* stars will be a different component */}
                <input type="text" value={this.state.review} onChange={this.handleChange} name="review"/>
                </div>
                <br></br>
                <div>
                <label>Genre:</label>
                <input type="text" value={this.state.genre} onChange={this.handleChange} name="genre"/>
                </div>
                <br></br>
                <input type="submit" value="Add Movie" />

                </form>
            </div>
        )
    }

}
export default MovieForm;