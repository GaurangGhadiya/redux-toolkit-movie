import React from "react";

const MovieCard = ({ data }) => {
  return (
    <>
      <div class="col-sm-6 col-md-4 col-lg-3 mb-25">
        <div class="card">
          <img src={data?.Poster} height={400} />
          <div class="card-body">
            <h6 class="card-text">{data?.Title}</h6>
            {data?.Year}
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default MovieCard;
