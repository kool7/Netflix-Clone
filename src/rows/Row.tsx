import axios from '../adapters/Axios';
import React, { useEffect, useState } from 'react'
import './Row.css'

type RowProps = {
    title: string,
    fetchURL: string,
    isLargeRow?: boolean
}

function Row(props: RowProps) {

    const [movies, setMovies] = useState<any>([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchURL);
            setMovies(request.data['results']);
            return request;
        }
        fetchData();
    }, [props.fetchURL])

    console.log(movies);

    return (
        <div className="row">
            <h2>{props.title}</h2>

            <div className="row_posters">
                {movies.map((movie: any) => (
                    ((props.isLargeRow && movie.poster_path) || (!props.isLargeRow && movie.backdrop_path)) && (
                        <img
                            className={`row_poster ${props.isLargeRow && "row_posterLarge"}`}
                            key={movie.id}
                            src={`https://image.tmdb.org/t/p/original${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                    )
                ))}
            </div>
        </div>
    )
}

export default Row
