import { Button } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosContext } from "../../../providers/AxiosProvider";
import MovieCard from "./MovieCard";
import "../../../CSS/Movies.css";

export default function Movies() {
  const { movies, directors } = useContext(AxiosContext);
  const navigate = useNavigate();

  const renderMovies = () => {
    return movies.map((c) => {
      return (
        <MovieCard
          key={c.id}
          id={c.id}
          title={c.title}
          year={c.year}
          length={c.length}
          rating={c.rating}
          mpa={c.mpa}
          studio={c.studio}
          budget={c.budget}
          poster={c.poster}
          director={directors.filter((x) => x.id == c.director_id)[0].name}
        />
      );
    });
  };

  return (
    <div className="Movies">
      <h1>MOVIES!</h1>
      <Button
        onClick={() => {
          navigate("/addMovie");
        }}
      >
        Add a Movie
      </Button>
      {renderMovies()}
    </div>
  );
}
