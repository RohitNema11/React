import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between relative m-0">
        <div className="text-2xl font-bold">
            <Link to="/">Flickwise</Link>
        </div>
        <div className="flex items-center gap-6">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/watchlist" className="nav-link">Watchlist</Link>

            <div className="nav-link"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={{ cursor: 'pointer' }}>
                Genres ▼
            </div> 

                {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div className="absolute top-full mt-2 right-0 bg-white text-black shadow-md rounded-md flex flex-col w-40 z-50">
                    <Link to="/action" className="nav-link">Action</Link>
                    <Link to="/comedy" className="nav-link">Comedy</Link>
                    <Link to="/thriller" className="nav-link">Thriller</Link>
                    <Link to="/horror" className="nav-link">Horror</Link>
                    <Link to="/crime" className="nav-link">Crime</Link>
                    <Link to="/family" className="nav-link">Family</Link>
                    <Link to="/animated" className="nav-link">Animated</Link>
                 </div>
            )}


        </div>
    </nav>
    )
}

export default NavBar