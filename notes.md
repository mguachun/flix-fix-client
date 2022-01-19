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