import { useContext } from "react"
import { AxiosContext } from "../../../providers/AxiosProvider"
import MovieCard from "./MovieCard"

export default function Movies(){
    const { movies } = useContext(AxiosContext)

    const renderMovies(
        movies.map((c) => {
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
            />
        })
    )

    return(
        <div>
            {renderMovies()}
        </div>
    )
}