import { MenuItem, Select } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosContext } from "../../../providers/AxiosProvider";
import Button from "../../styled-components/Button";
import { Text, Title } from "../../styled-components/Fonts";

export default function AddMovie(){
    const navigate = useNavigate();
    const { directors, newMovie} = useContext(AxiosContext)
    const [title, setTitle] = useState('title here')
    const [year, setYear] = useState('2000')
    const [length, setLength] = useState('100')
    const [rating, setRating] = useState('?/10')
    const [mpa, setMpa] = useState('')
    const [studio, setStudio] = useState('')
    const [budget, setBudget] = useState('000')
    const [poster, setPoster] = useState('')
    const [director_id, setDirector_id] = useState(1)
    const directorObj = directors.map((c) => {return <MenuItem value={c.id}>{c.name}</MenuItem>})

    const handleSubmit = (e) => {
        let newInfo = { title:title, year:year, length:length, rating:rating, mpa:mpa, studio:studio, budget:budget, poster:poster, director_id:director_id}
        newMovie(newInfo)
        navigate('/movies')
        window.location.reload()
    }

    const handleChange = (event) => {
        setDirector_id(event.target.value)
    }

    return(
        <div>
            <Title>Add a Movie to our List!</Title>
                <form onSubmit={handleSubmit}>
                    <Text>Title:</Text>
                    <input value={title} onChange={(e) => {setTitle(e.target.value)}} />
                    <Text>Year Released:</Text>
                    <input value={year} onChange={(e) => {setYear(e.target.value)}} />
                    <Text>Length (in minutes)</Text>
                    <input value={length} onChange={(e) => {setLength(e.target.value)}} />
                    <Text>IMDB Rating:</Text>
                    <input value={rating} onChange={(e) => {setRating(e.target.value)}} />                
                    <Text>MPAA Rating:</Text>
                    <input value={mpa} onChange={(e) => {setMpa(e.target.value)}} />
                    <Text>Studio:</Text>
                    <input value={studio} onChange={(e) => {setStudio(e.target.value)}} />                
                    <Text>Movie Budget (in USD):</Text>
                    <input value={budget} onChange={(e) => {setBudget(e.target.value)}} />
                    <Text>Poster Link:</Text>
                    <input value={poster} onChange={(e) => {setPoster(e.target.value)}}  size={100}/><br />
                    <Text>Director</Text>
                    <Select
                        onChange={handleChange}
                        value={director_id}
                        label="Choose director">
                            {directorObj}
                        </Select>

                    <Text> </Text>
                    <Button event={()=>{handleSubmit()}}>Submit</Button>
                </form>
        </div>
    )
}