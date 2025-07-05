'use client';

import { useWishlist } from "@/context/WishlistContext";
import MovieCard from "@/components/movieCard";

export default function WatchlistPage() {
  const { wishlist, setWishlist } = useWishlist();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      {wishlist.length === 0 ? (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Your Watchlist is Empty</h2>
          <p className="text-lg text-gray-400">
            Start adding movies to your watchlist and they’ll show up here!
          </p>
        </div>
      ) : (
        <div className="min-h-screen px-4 py-8 bg-black text-white">
          <h2 className="sticky top-[60px] z-40 bg-black text-3xl font-bold mb-6 py-4">
            Your Watchlist
          </h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {wishlist.map((movie) => (
    <MovieCard
      key={movie.id}
      movie={movie}
      wishlist={wishlist}
      setWishlist={setWishlist}
    />
  ))}
</div>
          </div>
        </div>
      )}
    </div>
  );
}
