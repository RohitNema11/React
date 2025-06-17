function Watchlist() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Your Watchlist is Empty</h2>
        <p className="text-lg text-gray-400">
          Start adding movies to your watchlist and they’ll show up here!
        </p>
      </div>
    </div>
  );
}

export default Watchlist;
