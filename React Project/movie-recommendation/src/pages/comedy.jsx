import { useState, useEffect } from "react";
import MovieCard from "../components/movieCard";
import { getComedyMovies } from "../services/api";
import MovieDetails from "./MovieDetails";

function Comedy({wishlist, setWishlist}) {

      const [movies, setMovies] = useState([]);
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(true);
      const [selectedMovieId, setSelectedMovieId] = useState(null);

       
      useEffect(() => {
        const loadComedyMovies = async () => {
          try {
            const comedyMovies = await getComedyMovies();
            setMovies(comedyMovies);
          } catch (err) {
            console.log(err);
            setError("Failed to load movies...");
          } finally {
            setLoading(false);
          }
        };
    
        loadComedyMovies()
      }, []);
    

        return(
            <div className="p-8 bg-gray-950 min-h-screen text-white">
  {error && (
    <div className="text-red-500 font-semibold mb-4">
      {error}
    </div>
  )}

  {loading ? (
    <div className="text-center text-lg font-medium">Loading...</div>
  ) : (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {movies.map((movie) => (

        <MovieCard movie={movie} key={movie.id} wishlist={wishlist} setWishlist={setWishlist} onClick={() => setSelectedMovieId(movie.id)}/>
        
      ))}
    </div>
  )}
  {selectedMovieId && (
        <MovieDetails
          movieId={selectedMovieId}
          onClose={() => setSelectedMovieId(null)}
        />
      )}
</div>
)
    
}

export default Comedy