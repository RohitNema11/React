import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
function MovieCard({movie, wishlist = [], setWishlist = () => {}}) {
    const isFavourite = wishlist?.some((m) => m.id === movie.id);

    function onFavouriteClick() {
        if (isFavourite) {
            setWishlist(wishlist.filter((m) => m.id !== movie.id));
        } 
        else {
            setWishlist([...wishlist, movie]);
        }
    }
    
    return <div className="movie-card bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
        <div className="relative">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-[350px] object-cover"/>
            <button onClick={onFavouriteClick} title={isFavourite ? 'Remove from Watchlist' : 'Add to Watchlist'} className={`py-4 text-2xl transition-colors duration-200 ${isFavourite ? 'text-pink-500' : 'text-white'}`}>
                {isFavourite ? <FaHeart /> : <FiHeart />}
            </button>
        </div>
        <div className="p-2 text-center">
            <h3 className="text-lg font-semibold">{movie.title}</h3>
            <p className="text-sm text-gray-400">{movie.release_date?.split("-")[0]}</p>
        </div>

    </div>
  );
}

export default MovieCard;
