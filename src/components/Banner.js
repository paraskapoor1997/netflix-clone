import React, { useState } from "react";
import { useEffect } from "react";
import axios from "../axios";
import requests from "./../requests";
import "./Banner.css";
import { Navigate, useNavigate } from "react-router-dom";
import Player from "./Player";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(requests.fetchNetflixOriginals);
      setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)]);
    };
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const play = (movie) => {
    navigate("/player", { state: { movie } });
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button onClick={() => play(movie)} className="banner__button">
            Play
          </button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
