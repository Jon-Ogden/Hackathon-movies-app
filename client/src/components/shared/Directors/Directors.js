import { Axios } from "axios";
import AxiosProvider from "../../../providers/AxiosProvider";
import DirectorCard from "./DirectorCard";
import { useContext } from "react";

const Directors = () => {
  const { directors } = useContext(AxiosProvider);

  const renderDirectors = () => {
    return directors.map((c) => {
      return <DirectorCard key={c.id} id={c.id} name={c.age} age={c.name} />;
    });
  };

  return (
    <div className="directors-page">
      <h1>Directors</h1>
      <div className="cards">{renderDirectors()}</div>
    </div>
  );
};

export default Directors;
