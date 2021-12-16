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
                <label>Title:</label>
                    <input type="text" value={this.state.title} onChange={this.handleChange} name="title"/>
                   

                </form>
            </div>
        )
    }

}
export default MovieForm;