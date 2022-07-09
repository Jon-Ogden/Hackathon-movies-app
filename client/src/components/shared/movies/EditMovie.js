import { MenuItem, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { AxiosContext } from "../../../providers/AxiosProvider";
import { Text, Title } from "../../styled-components/Fonts";
import Button from "../../styled-components/Button"
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function EditMovie(){
    const navigate = useNavigate();
    const params = useParams();
    const {movies, directors, updateMovie, deleteMovie} = useContext(AxiosContext)
    const movie = movies.filter(c => c.id == params.id)[0]
    const director = directors.filter(c => c.id == movie.director_id)[0]
    const [title, setTitle] = useState(movie.title)
    const [year, setYear] = useState(movie.year)
    const [length, setLength] = useState(movie.length)
    const [rating, setRating] = useState(movie.rating)
    const [mpa, setMpa] = useState(movie.mpa)
    const [studio, setStudio] = useState(movie.studio)
    const [budget, setBudget] = useState(movie.budget)
    const [poster, setPoster] = useState(movie.poster)
    const [director_id, setDirector_id] = useState(movie.director_id)
    const directorObj = directors.map((c) => {return <MenuItem value={c.id}>{c.name}</MenuItem>})


    const handleSubmit = (e) => {
        let newInfo = {id:params.id, title:title, year:year, length:length, rating:rating, mpa:mpa, studio:studio, budget:budget, poster:poster, director_id:director_id, oldD_id:director.id}
        updateMovie(newInfo)
        navigate('/movies')
        window.location.reload()
    }

    const remove = () => {
        deleteMovie(params.id, director.id)
    }

    const handleChange = (event) => {
        setDirector_id(event.target.value)
        navigate('/movies')
    }



    return(
        <div>
            <Title>Edit Movie Info</Title>
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
                    label={director.name}>
                        {directorObj}
                    </Select>

                <Text> </Text>
                <Button event={()=>{handleSubmit()}}>Submit</Button>
            </form>
            <Button event={()=>{remove()}}>Delete this Movie</Button>
        </div>
    )
}