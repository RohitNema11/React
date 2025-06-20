import { useState, useEffect } from "react";
import MovieCard from "../components/movieCard";
import MovieDetails from "./MovieDetails";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedMovieId, setSelectedMovieId] = useState(null); // ✅ modal control

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim() || loading) return;
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = (movieId) => {
    setSelectedMovieId(movieId);
  };

  return (
    <>
      <div className="w-screen bg-black text-white h-[60vh] flex items-center">
        <div className="px-8 text-left flex flex-col gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Watch Smarter</h1>
            <h3 className="text-xl">Your one-stop spot for discovering awesome movies.</h3>
          </div>
          <form onSubmit={handleSearch} className="flex mt-4">
            <input
              type="text"
              placeholder="Search for movies..."
              className="px-4 py-2 rounded-l-md text-black focus:outline-none w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-red-600 px-4 py-2 rounded-r-md hover:bg-red-700 transition"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="p-8 bg-gray-950 min-h-screen text-white">
        {error && (
          <div className="text-red-500 font-semibold mb-4">{error}</div>
        )}
        {loading ? (
          <div className="text-center text-lg font-medium">Loading...</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {movies.map((movie) => (
              <div key={movie.id} onClick={() => handleCardClick(movie.id)}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 🔍 MODAL */}
      {selectedMovieId && (
        <MovieDetails
          movieId={selectedMovieId}
          onClose={() => setSelectedMovieId(null)}
        />
      )}
      
      <footer className="bg-black text-white p-4 text-center">
        © 2025 Flickwise. All Rights Reserved.
      </footer>  
    </>

  );
}

export default Home;
