import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./RowPost.css";
import Youtube from "react-youtube";
const imgurl = "https://image.tmdb.org/t/p/original";
const apiKey = "encrypted";
function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [mid, setMid] = useState();
  useEffect(() => {
    axios.get(props.url).then((responce) => {
      setMovies(responce.data.results);
    });
  });
  function handleClick(id) {
    axios
      .get(`/movie/${id}/videos?api_key=${apiKey}&language=en-US`)
      .then((responce) => {
        if (responce.data.length !== 0) {
          setMid(responce.data.results[0]);
        } else {
          alert("no data to show");
        }
      });
  }
  const opts = {
    height: "390",
    width: "100%"
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((movie, index) => {
          return (
            <img
              key={index}
              onClick={() => handleClick(movie.id)}
              src={imgurl + movie.poster_path}
              className="poster"
              alt="poster"
            />
          );
        })}
      </div>
      {mid && <Youtube videoId={mid.key} opts={opts} />}
    </div>
  );
}

export default RowPost;
