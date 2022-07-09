import DirectorCard from "./DirectorCard";
import { useContext } from "react";
import { AxiosContext } from "../../../providers/AxiosProvider";

const Directors = () => {
  const { directors } = useContext(AxiosContext);
  console.log(directors);

  const renderDirectors = () => {
    return directors.map((c) => {
      return <DirectorCard key={c.id} id={c.id} name={c.name} age={c.age} />;
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
