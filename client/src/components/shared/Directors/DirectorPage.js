import { useContext, useEffect, useState } from "react";
import DirectorCardPage from "./DirectosCardPage";
import { AxiosContext } from "../../../providers/AxiosProvider";
import { useParams } from "react-router-dom";
import MovieCard from "../movies/MovieCard";
import axios from "axios";

const DirectorsPage = () => {
  const { movies } = useContext(AxiosContext);
  const params = useParams();
  const [director, setDirector] = useState([])

  const getDirectors = async () => {
    try {
      let res = await axios.get(`/api/directors/${params.id}`);
      setDirector(res.data);
    } catch (err) {
      alert(err);
    }
  };
  
  useEffect(()=>{
getDirectors();
  },[])

  
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
          director={director.name}
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
