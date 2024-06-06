import { Route,Routes } from "react-router-dom";
import Home from "../src/components/Home";

import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import TvShows from "./components/TvShows";
import People from "./components/People";
import AboutUS from "./components/AboutUS";

function App() {
  

  return (
    <div className="w-screen h-screen bg-[#1F1E24] flex">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/trending" element={<Trending/>}/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/movie" element={<Movie/>}/>
        <Route path="/tv" element={<TvShows/>}/>
        <Route path="/people" element={<People/>}/>
        <Route path="/about_us" element={<AboutUS/>}/>
        <Route path="/contact" element={<AboutUS/>}/>
        
      </Routes>
    </div>
  )
}

export default App
