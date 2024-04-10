import React, { useState }from 'react';
import Header from './Components/basic/Header';
import Home from './pages/home/Home';
import Footer from './Components/footer/Footer';
import MovieList from './Components/movieList/MovieList';
import Search from './Components/search/Search';
import MovieDetail from './pages/movieDetail/MovieDetail';
import Booking from './pages/booking/Book';
import Hall from './pages/cinemahall/cinema';
import Food from "./pages/food_beverage/FoodDetails";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Login from './pages/login/Login';

const queryClient = new QueryClient();

const App = () => {
  const [selected, setSelected] = useState("");//for dropdown
  const url = window.location.href;

  const bookingUrlFlag = url.includes('booking');
  const isSearchPage = url.includes('/search');

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {!bookingUrlFlag && !isSearchPage ? <Header /> : null}
        <Routes>
          <Route path="/dropdown" element={<Header selected={(selected)} setSelected={setSelected}/>} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="movie/:id" element={<MovieDetail />} />
          <Route path="movies/:type" element={<MovieList />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id/booking" element={<Hall />} />
          <Route path="/movie/:id/booking/ticket" element={<Booking />} />
          <Route path="/movie/:id/booking/food" element={<Food/>} />
          <Route path="/*" element={<h1>error page</h1>} />
        </Routes>
        {!bookingUrlFlag && !isSearchPage ? <Footer /> : null}
      </Router>
    </QueryClientProvider>
  );
};

export default App;
