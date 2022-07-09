import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useContext, useState } from "react";
import { Text } from "../../styled-components/Fonts";
import { AxiosContext } from "../../../providers/AxiosProvider";

export default function DirectorCard(props) {
  const {updateDirector, deleteDirector} = useContext(AxiosContext)
  const [edit, setEdit] = useState(true)
  const [name, setName] = useState(props.name)
  const [age, setAge] = useState(props.age)

  const toggleEdit = () => {
    if(edit == true){
      setEdit(false)
    } else{
      setEdit(true)
    }
  }

  const handleSubmit = (e) => {
    let newInfo = {id:props.id, name:name, age:age}
    updateDirector(newInfo)
    setEdit(true)
  }

  const remove = () => {
    deleteDirector(props.id)
  }

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        {edit ? (<CardContent>
          <Typography variant="h5" component="div" director={props.name}>
            {`${props.name}`}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary" age={props.age}>
            {`Age: ${props.age}`}
          </Typography>
        </CardContent>) : 
        <form onSubmit={handleSubmit}>
          <Text>Name</Text>
          <input value={name} onChange={(e) => {setName(e.target.value)}} />
          <Text>Age</Text>
          <input value={age} onChange={(e) => {setAge(e.target.value)}} />
          <Button onClick={() => {handleSubmit()}}>Submit</Button>
        </form>
        }
        <CardActions>
          <Button id={props.id} size="small" href={`directorpage/${props.id} `}>
            Filmography
          </Button>
          <Button size="small" onClick={()=>{toggleEdit()}}>Edit Director</Button>
          <Button size="small" onClick={()=>{remove()}}>Delete Director</Button>
        </CardActions>
      </Card>
      <hr />
    </div>
  );
}
