import { Route, Routes } from 'react-router-dom';
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
import { mainApi } from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRouteAuth from '../ProtectedRouteAuth/ProtectedRouteAuth';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(JSON.parse(localStorage.getItem('loggedIn')) || false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  const handleOpenBurgerMenu = () => {
    setIsBurgerMenuOpen(true);
  }

  const handleCloseBurgerMenu = () => {
    setIsBurgerMenuOpen(false);
  }

  const handleLogOut = () => {
    setIsLoggedIn(false);
    localStorage.clear();
  }

  const handleLogIn = () => {
    setIsLoggedIn(true);
    localStorage.setItem('loggedIn', true);
  }

  const checkToken = () => {
    mainApi.checkToken()
      .then((res) => {
        handleLogIn();
        setCurrentUser(res);
      })
      .catch((err) => {
        handleLogOut();
        console.log(err);
      })
  }

  React.useEffect(() => {
    checkToken();
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
              <ProtectedRoute element={Movies} isLoggedIn={isLoggedIn} />
              <Footer />
            </>
          }/>  
          <Route path='/saved-movies' element={
            <>
              <Header mainPage={false} handleOpenBurgerMenu={handleOpenBurgerMenu} isLoggedIn={isLoggedIn}/>
              <ProtectedRoute element={SavedMovies} isLoggedIn={isLoggedIn} />
              <Footer />
            </>
          }/>  
          <Route path='/profile' element={
            <>
              <Header mainPage={false} handleOpenBurgerMenu={handleOpenBurgerMenu} isLoggedIn={isLoggedIn}/>
              <ProtectedRoute element={Profile} setCurrentUser={setCurrentUser} handleLogOut={handleLogOut} isLoggedIn={isLoggedIn} />
            </>
          }/>     
          <Route path='/signup' element={
            <ProtectedRouteAuth element={Register} isLoggedIn={isLoggedIn} handleLogIn={handleLogIn} />
          }/>
          <Route path='/signin' element={
            <ProtectedRouteAuth element={Login} isLoggedIn={isLoggedIn} handleLogIn={handleLogIn} />
          }/>      
          <Route path='*' element={
            <NotFound />
          }/>                                        
        </Routes>
        <BurgerMenu isBurgerMenuOpen={isBurgerMenuOpen} handleCloseBurgerMenu={handleCloseBurgerMenu} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
