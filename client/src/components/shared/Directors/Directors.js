import DirectorCard from "./DirectorCard";
import { useContext, useState } from "react";
import { AxiosContext } from "../../../providers/AxiosProvider";
import { Button } from "@mui/material";
import { Text } from "../../styled-components/Fonts";

const Directors = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const { directors, newDirector } = useContext(AxiosContext);

  const handleSubmit = () => {
    let newInfo = {name:name, age:age}
    newDirector(newInfo)
    setName('')
    setAge('')
  }



  const renderDirectors = () => {
    return directors.map((c) => {
      return <DirectorCard key={c.id} id={c.id} name={c.name} age={c.age} />;
    });
  };

  return (
    <div className="directors-page">
      <h1>Directors</h1>
      <div className="cards">{renderDirectors()}</div>
      <form>
        <Text>Name</Text>
        <input value={name} onChange={(e) => {setName(e.target.value)}} />
        <Text>Age</Text>
        <input value={age} onChange={(e) => {setAge(e.target.value)}} />
        <Button onClick={()=>{handleSubmit()}}>Add a New Director</Button>
      </form>
    </div>
  );
};

export default Directors;
