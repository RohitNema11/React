import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../assets/android-chrome-192x192.png';

function NavBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (

        <nav className="bg-black text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 m-0">

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

            <div className="flex items-center gap-6">
                <Link to="/" className="hover:text-blue-300 hover:scale-105">Home</Link>
                <Link to="/contact" className="hover:text-blue-300 hover:scale-105">Contact</Link>
                <Link to="/watchlist" className="hover:text-blue-300 hover:scale-105">Watchlist</Link>

                <div
                    className="hover:text-blue-300 cursor-pointer hover:scale-105"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    Genres ▼
                </div>

                {isDropdownOpen && (
                    <div className="absolute top-full mt-2 right-6 bg-white text-black rounded-md flex flex-col w-40 z-50 ">
                        <Link to="/action" className="hover:bg-slate-300">Action</Link>
                        <Link to="/comedy" className="hover:bg-slate-300">Comedy</Link>
                        <Link to="/thriller" className="hover:bg-slate-300">Thriller</Link>
                        <Link to="/horror" className="hover:bg-slate-300">Horror</Link>
                        <Link to="/crime" className="hover:bg-slate-300">Crime</Link>
                        <Link to="/family" className="hover:bg-slate-300">Family</Link>
                        <Link to="/animated" className="hover:bg-slate-300">Animated</Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default NavBar;
