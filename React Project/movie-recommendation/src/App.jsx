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
import './App.css'

function App() {

  return (
    <div>
      <NavBar/> 
      <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/watchlist' element={<Watchlist/>}/>
        <Route path='/action' element={<Action/>}/>
        <Route path='/comedy' element={<Comedy/>}/>
        <Route path='/thriller' element={<Thriller/>}/>
        <Route path='/horror' element={<Horror/>}/>
        <Route path='/crime' element={<Crime/>}/>
        <Route path='/family' element={<Family/>}/>
        <Route path='/animated' element={<Animated/>}/>
      </Routes> 
    </main>
    </div>
  )
}

export default App
