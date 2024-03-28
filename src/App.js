import React from 'react'; //{ useState }
// import SignIn from './Components/Login/SignIn'
// import SignOut from './Components/Login/SignOut';
import Login from './pages/login/Login';
import Header from './Components/basic/Header';
import Home from './pages/home/Home';
import Footer from './Components/footer/Footer'
import MovieList from './Components/movieList/MovieList';
import MovieDetail from './pages/movieDetail/MovieDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  // const [isSignedIn, setIsSignedIn] = useState(false);

  // const handleSignIn = (status) => {
  //   setIsSignedIn(status);
  // };

  return (
    <Router>
      {/* navigation start  */}
      <Header />
       {/* navigation end  */}
      <Login />
       {/* Login start*/}
      
    {/* Login end*/}
      <Routes>
        <Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="movie/:id" element={<MovieDetail/>}></Route>
          <Route path="movie/:id" element={<Login/>}></Route>
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