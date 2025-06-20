import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import NavBar from './components/navBar'
import Watchlist from './pages/watchlist';
import Action from './pages/action';
import Comedy from './pages/comedy';
import Thriller from './pages/thriller';
import Horror from './pages/horror';
import Family from './pages/family';
import Animated from './pages/animated';
import Crime from './pages/crime';
import Contact from './pages/contact';
import './App.css'

function App() {
  const [wishlist, setWishlist] = useState([]);

  return (
    <div>
      <NavBar/> 
      <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home wishlist={wishlist} setWishlist={setWishlist} />}/>
        <Route path='/watchlist' element={<Watchlist wishlist={wishlist} setWishlist={setWishlist} />}/>
        <Route path='/action' element={<Action wishlist={wishlist} setWishlist={setWishlist} />}/>
        <Route path='/comedy' element={<Comedy wishlist={wishlist} setWishlist={setWishlist} />}/>
        <Route path='/thriller' element={<Thriller wishlist={wishlist} setWishlist={setWishlist} />}/>
        <Route path='/horror' element={<Horror wishlist={wishlist} setWishlist={setWishlist} />}/>
        <Route path='/crime' element={<Crime wishlist={wishlist} setWishlist={setWishlist} />}/>
        <Route path='/family' element={<Family wishlist={wishlist} setWishlist={setWishlist} />}/>
        <Route path='/animated' element={<Animated wishlist={wishlist} setWishlist={setWishlist} />}/>
        <Route path='/contact' element={<Contact />} />
      </Routes> 
    </main>
    </div>
  )
}

export default App
