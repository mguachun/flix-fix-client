import React from "react";
// import StarRating from "../StarRating";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      movies: []
      //this.props.title

      
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
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
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
        <li>
          {this.props.movies.map(movie => (
            <li key={movie.id}>
              {movie.title} {movie.year}
            </li>
          ))}
        </li>
        // return this.props.banks.map((bank) => <div className="bank-list-data">
        // <ol>
        //  {bank.name} is a {bank.gender} 🐖 with ${bank.fund} 💰
      );
    }
  }

}





export default Home;