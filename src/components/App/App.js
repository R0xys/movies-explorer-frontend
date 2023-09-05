import { Link, Route, Router, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';
import Movies from '../Movies/Movies';
import React from 'react';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false)

  const handleOpenBurgerMenu = () => {
    setIsBurgerMenuOpen(true);
  }

  const handleCloseBurgerMenu = () => {
    setIsBurgerMenuOpen(false);
  }

  const handleLogOut = () => {
    setIsLoggedIn(false);
  }

  const handleLogIn = () => {
    setIsLoggedIn(true);
  }

  return (
    <div className={`${isBurgerMenuOpen ? 'page__containet_scroll-block' : ''} page__container`}>
      <Routes>
        <Route path='/' element={
          <>
            <Header mainPage={true} handleOpenBurgerMenu={handleOpenBurgerMenu} isLoggedIn={isLoggedIn}/>
            <Main />
            <Footer />
          </>
        }/>
        <Route path='/movies' element={
          <>
            <Header mainPage={false} handleOpenBurgerMenu={handleOpenBurgerMenu} isLoggedIn={isLoggedIn}/>
            <Movies />
            <Footer />
          </>
        }/>  
        <Route path='/saved-movies' element={
          <>
            <Header mainPage={false} handleOpenBurgerMenu={handleOpenBurgerMenu} isLoggedIn={isLoggedIn}/>
            <SavedMovies />
            <Footer />
          </>
        }/>  
        <Route path='/profile' element={
          <>
            <Header mainPage={false} handleOpenBurgerMenu={handleOpenBurgerMenu} isLoggedIn={isLoggedIn}/>
            <Profile handleLogOut={handleLogOut} />
          </>
        }/>     
        <Route path='/signup' element={
          <Register />
        }/>
        <Route path='/signin' element={
          <Login handleLogIn={handleLogIn} />
        }/>      
        <Route path='*' element={
          <NotFound />
        }/>                                        
      </Routes>
      <BurgerMenu isBurgerMenuOpen={isBurgerMenuOpen} handleCloseBurgerMenu={handleCloseBurgerMenu} />
    </div>
  );
}

export default App;
