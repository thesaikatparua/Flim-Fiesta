import React from 'react'
import Header from './Components/basic/Header';

// import { TopRated } from '../src/pages/toprated';
// import { Upcoming } from '../src/pages/upcoming';
import Home from './pages/home/Home'
import MovieList from './Components/movieList/MovieList';
import MovieDetail from './pages/movieDetail/MovieDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="search-bar-container">
        <Header />
        </div>
      </div>
      {/* <div className="App">
      <Header />
      <Routes>
        <Route path="/top_rated" element={<TopRated />}/>
        <Route path="/upcoming" element={<Upcoming />}/>
      </Routes>
      </div> */}
      {/* navigation start  */}
      <Header />
       {/* navigation end  */}
      <Routes>
        <Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="movie/:id" element={<MovieDetail/>}></Route>
          {/* movielist indicate category section  */}
          <Route path="movies/:type" element={<MovieList/>}></Route>
          <Route path="/*" element={<h1>error page</h1>}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App