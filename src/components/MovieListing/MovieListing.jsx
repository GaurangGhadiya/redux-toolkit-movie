import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "features/Movies/MovieSlice";
import MovieCard from "components/MovieCard/MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);

  const renderMovie = movies?.Search?.map((item) => <MovieCard data={item} />);

  return <div className="row">{renderMovie}</div>;
};

export default MovieListing;
