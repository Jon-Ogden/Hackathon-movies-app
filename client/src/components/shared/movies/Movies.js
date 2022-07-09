import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AxiosContext } from "../../../providers/AxiosProvider"
import MovieCard from "./MovieCard"

export default function Movies(){
    const { movies, directors } = useContext(AxiosContext)
    // const [directors, setDirectors] = useState([])

    // const getDirectors = async() => {
    //     try{
    //         let res = await axios.get('/api/directors')
    //         setDirectors(res.data)
    //     }catch(err){
    //         alert(err)
    //     }
    // }

    // useEffect(()=>{
    //     getDirectors()
    // },[])


    const renderMovies = () => {
        return movies.map((c) => {
            return <MovieCard 
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
            director={directors.filter(x => x.id == c.director_id)[0].name}
            />
        })
    }

    return(
        <div>
            <h1>MOVIES!</h1>
            {renderMovies()}
        </div>
    )
}