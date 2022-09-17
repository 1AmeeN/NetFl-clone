import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "../../axios";
const Apikey = "d03799692be1c26faf0ade18a4205f9f";
const imgurl = "https://image.tmdb.org/t/p/original";
var randomnum = Math.floor(Math.random() * 20);
function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios
      .get(`/discover/movie?api_key=${Apikey}&with_genres=27`)
      .then((responce) => {
        setMovie(responce.data.results[randomnum]);
      });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imgurl + movie.poster_path : "cover"})`
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie.original_title} </h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{movie.overview}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
