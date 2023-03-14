import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../axios";
import "./Row.css";
import { useNavigate } from "react-router-dom";

const baseurl = `https://image.tmdb.org/t/p/original/`;

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const opts = {
    height: "390px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await axios.get(fetchUrl);
      if (response.status === 200) {
        setMovies(response.data.results);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleClick = (movie) => {
    if (movie) {
      navigate("/player", { state: { movie } });
    }
  };
  const arr = [];
  arr.length = 5;

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className={`row__posters `}>
        {isLoading && (
          <>
            <div className="row__skeleton"></div>
            <div className="row__skeleton"></div>
            <div className="row__skeleton"></div>
            <div className="row__skeleton"></div>
            <div className="row__skeleton"></div>
            <div className="row__skeleton"></div>
          </>
        )}
        {!isLoading &&
          movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterlarge"}`}
              src={`${baseurl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
          ))}
      </div>
    </div>
  );
};

export default Row;
