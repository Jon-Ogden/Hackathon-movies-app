import { useContext } from "react";
import DirectorCardPage from "./DirectosCardPage";
import { AxiosContext } from "../../../providers/AxiosProvider";
import { useParams } from "react-router-dom";
import MovieCard from "../movies/MovieCard";

const DirectorsPage = () => {
  const { directors, movies } = useContext(AxiosContext);
  console.log(directors);
  const params = useParams();
  let director = directors.filter((d) => params.id == d.id)[0];
  const directormovie = movies.filter((m) => params.id == m.director_id);
  const renderDirectors = () => {
    console.log(directormovie);
    console.log();
    return (
      <DirectorCardPage
        key={director.id}
        id={director.id}
        name={director.name}
      />
    );
  };
  const renderMovies = () => {
    return directormovie.map((c) => {
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
        />
      );
    });
  };

  return (
    <div className="directors-page">
      <div className="cards">{renderDirectors()}</div>
      {renderMovies()}
    </div>
  );
};

export default DirectorsPage;
