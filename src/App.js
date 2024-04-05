import React from 'react';
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
  const url = window.location.href;
  const bookingUrlFlag = url.includes('booking');
  //const isLoginPage = url.includes('login');
  
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {!bookingUrlFlag ? <Header /> : null}
        {<Login /> ? null : <Header /> }
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="movie/:id" element={<MovieDetail />} />
          <Route path="movies/:type" element={<MovieList />} />
          <Route path="movie/search" element={<Search />} />
          <Route path="/movie/:id/booking" element={<Hall />} />
          <Route path="/movie/:id/booking/ticket" element={<Booking />} />
          <Route path="/movie/:id/booking/food" element={<Food/>} />
          <Route path="/*" element={<h1>error page</h1>} />
        </Routes>
        {!bookingUrlFlag ? <Footer /> : null}
      </Router>
    </QueryClientProvider>
  );
};

export default App;
