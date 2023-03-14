import { BsArrowLeft } from "react-icons/bs";

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Player.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Player = ({ video }) => {
  const [movieUrl, setMovieUrl] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    movieTrailer(location.state.movie?.name || location.state.movie?.title || "")
      .then((url) => {
        const urlparams = new URLSearchParams(new URL(url).search);
        setMovieUrl(urlparams.get("v"));
      })
      .catch((err) => {
        console.log(err);
        if (err) navigate("/");
      });
  }, [location.state.movie]);
  const opts = {
    height: 600,
    width: "900",

    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div>
      <div className="player">
        {/* <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div> */}
        {/* <iframe
          src="  https://www.youtube.com/embed/k68j9xlbHHk"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; modestbranding; showinfo=0; fullscreen;playsinline"
          allowfullscreen
          webkitallowfullscreen
          mozallowfullscreen
        ></iframe> */}

        <YouTube
          style={{ display: "flex", justifyContent: "center", padding: "30px" }}
          videoId={movieUrl}
          opts={opts}
        />
        {/* <video
          src={"https://www.youtube.com/watch?v=" + movieUrl}
          autoPlay
          loop
          controls
          muted
        ></video> */}
      </div>
    </div>
  );
};

export default Player;
