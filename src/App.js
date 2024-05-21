import React, { useState } from 'react';
import Header from './Components/basic/Header';
import Home from './pages/home/Home';
import Footer from './Components/footer/Footer';
import MovieList from './Components/movieList/MovieList';
import Search from './Components/search/Search';
import MovieDetail from './pages/movieDetail/MovieDetail';
import Booking from './pages/booking/Book';
import Hall from './pages/cinemahall/cinema';
import Food from "./pages/food_beverage/FoodDetails";
import Offer from "./pages/offer/Offer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Signup from "./Components/form/Registration"
import Signin from "./Components/form/Login";

const queryClient = new QueryClient();

const App = () => {
  const[user,setUser]=useState("");

  const url = window.location.href;

  const bookingUrlFlag = url.includes('booking');
  const isSearchPage = url.includes('/search');
   const signVal=(data)=>{
    console.log(data)
    setUser(data)
   }
   

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {!bookingUrlFlag && !isSearchPage ? <Header name={user} /> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup handleSign={signVal}/>} />
          <Route path="/login" element={<Signin handleSign={signVal}/>} />
          <Route path="movie/:id" element={<MovieDetail />} />
          <Route path="movies/:type" element={<MovieList />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id/booking" element={<Hall />} />
          <Route path="/movie/:id/booking/ticket" element={<Booking />} />
          <Route path="/movie/:id/booking/food"  element={<Food/>} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/*" element={<h1>error page</h1>} />
   
        </Routes>
        {!bookingUrlFlag && !isSearchPage ? <Footer /> : null}
      </Router>
    </QueryClientProvider>
  );
};

export default App;
