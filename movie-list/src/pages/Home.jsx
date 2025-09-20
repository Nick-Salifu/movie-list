import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"
import { getPopularMovies, searchMovies } from "../services/api"
import "../css/Home.css"

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (error) {
               console.log(error); 
               setError("Failed to load movies...")
            } finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])


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
        
          {error && <div className="error-message">{error}</div>}
        
          {loading ? (
              <div className="loading">Loading...</div>
          ) : (
                <div className="movies-grid">
                    {movies.map(movie => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
              )}
    </div>
  )
}

export default Home