import React, { useEffect } from "react";
import MovieListing from "components/MovieListing/MovieListing";
import MovieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMonvies } from "features/Movies/MovieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const searchText = "Harry";
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await MovieApi.get(
        `?apiKey=${APIKey}&s=${searchText}&type=movie`
      );
      console.log("res", res);
      dispatch(addMonvies(res?.data));
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <MovieListing />
    </div>
  );
};

export default Home;
