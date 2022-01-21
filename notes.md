   <!-- {/* this.props.movies.map(movie => (
            <li key={movie.id}>
              {movie.title} {movie.year}
            </li>
          ) */}
        
        {/* // return this.props.banks.map((bank) => <div className="bank-list-data">
        // <ol>
        //  {bank.name} is a {bank.gender} 🐖 with ${bank.fund} 💰 */} -->


class for Home page 
<!-- import React from "react";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      movies: [] 
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/movies")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            movies: result.movies
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    const { error, isLoaded, movies } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      
      return (
        <div className="Home">
           {this.state.movies.map((movie, key) => {
            return (
              <div key={key}>
                <span>{movie.id}</span>
                <span>{movie.title}</span>
                <span>{movie.year}</span>
              </div>
            )
          })}
        </div>
  
      );
    }
  }

}




export default Home; -->


MovieCard
<!-- <h2>Title:{title}</h2>
<h2>Year:{year}</h2> -->

MovieForm 

 <!-- const [title, setTitle] = useState("")
    const [director, setDirector] = useState("")
    const [year, setYear] = useState("")
    const [stars, setStars] = useState("")
    const [review, setReview] = useState("")
    const [genre, setGenre] = useState("")

  

    handleSubmit = (e) => {
        e.preventDefault();
        const movieData = {title, director, year, stars, review, genre}
    
        fetch("http://localhost:3000/movies", {
            method: 'POST',
            body: JSON.stringify(movieData),
            headers: {
                "Content-Type": "application/json",
            }
        })
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
            [e.target.name]: e.target.value
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
    }; -->

          <!-- // return (
        //     <div className="form-container">
        //         <form onSubmit={handleSubmit}>
        //         <h1>Track a Movie</h1>
        //         <div>
        //         <label>Title:</label>
        //         <input type="text" value={title} onChange={handleChange} name="title"/>
        //         </div>
        //         <br></br>
        //         <div>
        //         <label>Director:</label>
        //         <input type="text" value={director} onChange={handleChange} name="director"/>
        //         </div>
        //         <br></br>
        //         <div>
        //         <label>Year:</label>
        //         <input type="text" value={year} onChange={handleChange} name="year"/>
        //         </div>
        //         <br></br>
        //         <div>
        //         <label>Review:</label>
    
        //         <input type="text" value={review} onChange={handleChange} name="review"/>
        //         </div>
        //         <br></br>
        //         <div>
        //         <label>Genre:</label>
        //         <input type="text" value={genre} onChange={handleChange} name="genre"/>
        //         </div>
        //         <br></br>
        //         <input type="submit" value="Submit" />

        //         </form>
        //     </div>
        // )
    // } -->
