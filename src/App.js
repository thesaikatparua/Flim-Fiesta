import React from 'react'
import Header from './Components/basic/Header';
import Home from './pages/home/Home';
import Footer from './Components/footer/Footer'
import MovieList from './Components/movieList/MovieList';
import MovieDetail from './pages/movieDetail/MovieDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
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
     <Footer/>
    </Router>
  )
}

export default App