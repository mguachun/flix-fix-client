import React, { useEffect, useState } from "react";
const Home = () => {
 const [movie, setMovie] = useState("");

 useEffect(() => {
   const url = "http://localhost:3000/movies";

   const fetchData = async () => {
     try {
       const response = await fetch(url);
       const json = await response.json();
       console.log(json.movie);
       setMovie(json.movie);
     } catch (error) {
       console.log("error", error);
     }
   };
   
   fetchData();
 }, []);
 return (
   <div>
    <h1>Fetch Data from an API</h1>
    <h2>{movie}</h2>
   </div>
);
};

export default Home;