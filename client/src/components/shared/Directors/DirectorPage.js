import { useContext } from "react";
import DirectorCardPage from "./DirectosCardPage";
import { AxiosContext } from "../../../providers/AxiosProvider";
import { useParams } from "react-router-dom";

const DirectorsPage = () => {
  const { directors, movies } = useContext(AxiosContext);
  console.log(directors);
  const params = useParams();
  const renderDirectors = () => {
    let director = directors.filter((d) => params.id == d.id)[0];
    let directormovie = movies.filter((m) => params.id == m.director_id);
    console.log(directormovie);
    console.log();
    return (
      <DirectorCardPage
        key={director.id}
        id={director.id}
        name={director.name}
        movies={directormovie.movies}
      />
    );
  };

  return (
    <div className="directors-page">
      <div className="cards">{renderDirectors()}</div>
    </div>
  );
};

export default DirectorsPage;
