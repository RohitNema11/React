import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../assets/android-chrome-192x192.png';

function NavBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="bg-black text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 m-0">
            {/* Logo + Title */}
            <div className="flex items-center gap-3">
                <Link to="/" className="flex items-center gap-2">
                    <img 
                        src={logo} 
                        alt="Logo" 
                        className="w-8 h-8" 
                    />
                    <span className="text-2xl font-bold">Flickwise</span>
                </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-6">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
                <Link to="/watchlist" className="nav-link">Watchlist</Link>

                <div
                    className="nav-link cursor-pointer"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    Genres ▼
                </div>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                    <div className="absolute top-full mt-2 right-6 bg-white text-black shadow-md rounded-md flex flex-col w-40 z-50">
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
    );
}

export default NavBar;
