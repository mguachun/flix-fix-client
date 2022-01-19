import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
  const [movies, setMovies] = useState([]);

  const fetchPost = async () => {
    const response = await axios(
    "http://localhost:3000/movies"
    );
    console.log(response);

  }

}