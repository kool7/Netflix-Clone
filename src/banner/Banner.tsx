import axios from '../adapters/Axios';
import React, { useEffect, useState } from 'react'
import './Banner.css'
import Requests from '../adapters/Requests';

function Banner() {

    const [movie, setMovie] = useState<any>([]);

    useEffect(() => {
        let results: any[] = [];
        async function fetchData() {
            const request = await axios.get(Requests.fetchNetflixOriginals);
            results = request.data['results'];
            setMovie(
                results[Math.floor(Math.random() * results.length - 1)
                ]);
            return request;
        }
        fetchData();
    }, []);

    const truncate = (string: string, num: number) => {
        return string?.length > num ? string.substr(0, num - 1) + '...' : string;
    }

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}>
            <div className="banner_contents">
                <h1 className="title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="description">{truncate(movie?.overview, 150)}</h1>
            </div>

            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
