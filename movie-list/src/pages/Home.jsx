import { useState } from "react"
import MovieCard from "../components/MovieCard"
import "../css/Home.css"

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "Terminator", release_date: "2001"},
        {id: 2, title: "The Finisher", release_date: "2007"},
        {id: 3, title: "Transporter", release_date: "2011"},
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(searchQuery) 
        setSearchQuery("")
    }

  return (
    <div className="home">
        <form className="search-form" onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Search for movies..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map(movie => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
  )
}

export default Home