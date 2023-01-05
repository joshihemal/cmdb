import React, { useEffect, useState } from "react";
import "./Home.css";
import { apiKey } from "../../Constants";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);
  return (
    <>
      <div className="poster">
        {popularMovies && popularMovies.length > 0 && (
          <Carousel
            autoFocus={true}
            showThumbs={false}
            autoPlay={true}
            transitionTime={1000}
            infiniteLoop={true}
            showStatus={false}
          >
            {popularMovies.map((movie: any) => (
              <Link
                key={movie.id}
                to={`/movies/${movie.id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="posterImage">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${
                      movie && movie.backdrop_path
                    }`}
                    alt={movie.title}
                  />
                </div>
                <div className="posterImage__overlay">
                  <div className="posterImage__title">
                    {movie ? movie.title : ""}
                  </div>
                  <div className="posterImage__runtime">
                    {movie ? movie.release_date : ""}
                    <span className="posterImage__rating">
                      {movie ? movie.vote_average : ""}
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <div className="posterImage__description">
                    {movie ? movie.overview : ""}
                  </div>
                </div>
              </Link>
            ))}
          </Carousel>
        )}
      </div>
    </>
  );
};

export default Home;
