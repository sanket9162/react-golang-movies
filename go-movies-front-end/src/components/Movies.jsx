import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Movies = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let movieList = [
            {
                id: 1,
                title: "Highlander",
                release_data: "1986-03-07",
                runtime: 116,
                mpaa_rating: "R",
                description: "Some long description"
            },
            {
                id: 2,
                title: "Raiders of the Lost Ark",
                release_data: "1986-03-07",
                runtime: 116,
                mpaa_rating: "R",
                description: "Some long description"
            },
        ];
        setMovies(movieList)
    }, [])
    return(
        <>
        <div className="text-center">
            <h2>Movies</h2>
            <hr />
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Movies</th>
                        <th>Release Date</th>                        
                        <th>Rating</th>                        
                    </tr>
                </thead>
                <tbody>
                    {movies.map((m) => (
                        <tr key={m.id}>
                            <td>
                                <Link to={`/movie/${m.id}`}>
                                {m.title}
                                </Link>
                            </td>
                            <td>{m.release_data}</td>
                            <td>{m.mpaa_rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Movies