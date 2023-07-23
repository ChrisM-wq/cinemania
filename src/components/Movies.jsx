import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Movie from "./Movie";

const Movies = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/movies")
        .then(response => {
            console.log(response.data);
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <div className="grid place-items-center gap-10 grid-flow-row-dense grid-cols-6 p-10">
            {data.map((movie) => (
                <Movie title={movie.title} poster={movie.poster} />
            ))}
        </div>
    )
};

export default Movies;