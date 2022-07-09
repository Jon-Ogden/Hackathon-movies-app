import axios from "axios";
import React, { useEffect, useState } from "react";

export const AxiosContext = React.createContext();

const AxiosProvider = ({ children }) => {
  const [directors, setDirectors] = useState([]);
  const [movies, setMovies] = useState([]);
  const [actors, setActors] = useState([]);

  const getDirectors = async () => {
    try {
      let res = await axios.get("/api/directors");
      setDirectors(res.data);
    } catch (err) {
      alert(err);
    }
  }
    
    const getMovies = async() => {
        try{
            let res = await axios.get('/api/all_movies')
            setMovies(res.data)
        }catch(err){
            alert(err)
        }
    }
  

  const getActors = async () => {
    try {
      let res = await axios.get("/api/actors");
      setActors(res.data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getDirectors();
    getMovies();
    getActors();
  }, []);

  const updateDirector = async (newInfo) => {
    let newDirectors = directors.map((c) =>
      c.id === newInfo.id ? newInfo : c
    );
    setDirectors(newDirectors);
    axios.put(`/api/directors/${newInfo.id}`, newInfo);
  };
  const newDirector = async (newInfo) => {
    let newDirectors = [...directors, newInfo];
    setDirectors(newDirectors);
    axios.post(`/api/directors/`, newInfo);
  };
  const deleteDirector = (id) => {
    setDirectors(directors.filter((c) => c.id !== id));
    axios.delete(`/api/directors/${id}`);
  };

  const updateMovie = async (newInfo) => {
    let newMovies = movies.map((c) => (c.id === newInfo.id ? newInfo : c));
    setMovies(newMovies);
    axios.put(
      `/api/directors/${newInfo.director_id}/movies/${newInfo.id}`,
      newInfo
    );
  };
  const newMovie = async (newInfo) => {
    let newMovies = [...movies, newInfo];
    setMovies(newMovies);
    axios.post(`/api/directors/${newInfo.director_id}/movies/`, newInfo);
  };
  const deleteMovie = (id, d_id) => {
    setMovies(movies.filter((c) => c.id !== id));
    axios.delete(`/api/directors/${d_id}/movies/${id}`);
  };

  const updateActor = async (newInfo, id) => {
    let newActors = actors.map((c) => (c.id === newInfo.id ? newInfo : c));
    setActors(newActors);
    axios.put(`/api/movies/${newInfo.movie_id}/actors/${id}}`, newInfo);
  };
  const newActor = async (newInfo) => {
    let newActors = [...actors, newInfo];
    setActors(newActors);
    axios.post(`/api/movies/${newInfo.movie_id}/actors/`, newInfo);
  };
  const deleteActor = (id, m_id) => {
    setActors(actors.filter((c) => c.id !== id));
    axios.delete(`/api/movies/${m_id}/actors/${id}`);
  };

  return (
    <AxiosContext.Provider
      value={{
        directors,
        movies,
        actors,
        updateDirector,
        newDirector,
        deleteDirector,
        updateActor,
        updateMovie,
        newActor,
        newMovie,
        deleteActor,
        deleteMovie,
      }}
    >
      {children}
    </AxiosContext.Provider>
  );
};

export default AxiosProvider;
