import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { PlatformContext } from './contexts/PlatformContext'
import { GenreContext } from './contexts/GenreContext'
import { SortByContext } from './contexts/SortByContext'

import SearchBar from './components/shared/SearchBar/SearchBar'
import Home from './components/pages/Home/Home'
import AllGames from './components/pages/AllGames/AllGames'
import GameDetails from './components/pages/GameDetails/GameDetails'

import './App.scss'

function App() {

  const [platform, setPlatform] = useState("all");
  const [genre, setGenre] = useState([]);
  const [sortBy, setSortBy] = useState("relevance");

  return (
    <main>
      <PlatformContext.Provider value={{ platform, setPlatform }}>
        <GenreContext.Provider value={{ genre, setGenre }}>
          <SortByContext.Provider value={{ sortBy, setSortBy }}>
            <SearchBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/allgames" element={<AllGames />} />
              <Route path="/details/:id" element={<GameDetails />} />
            </Routes>
          </SortByContext.Provider>
        </GenreContext.Provider>
      </PlatformContext.Provider>
    </main>
  )
}

export default App
