import { mainApi } from '../../utils/MainApi';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import React from 'react';

function SavedMovies() {
  const [moviesList, setMoviesList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSwitcherChecked, setIsSwitcherChecked] = React.useState(false);
  const [isMoviesLoaded, setIsMoviesLoaded] = React.useState(false);
  const [isNotFound, setIsNotFound] = React.useState(false);
  
  const handleSubmitSearchForm = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    mainApi.getMovies()
      .then((res) => {
        setMoviesList(res);
        setIsMoviesLoaded(true);
        if (res.length === 0) {
          setIsMoviesLoaded(false)
          setIsNotFound(true);
        };
        localStorage.setItem('switcherChecked', isSwitcherChecked);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false))

  }

  const handleToggleSwitcher = () => {
    setIsSwitcherChecked(!isSwitcherChecked);
  }
  
  return (
    <main className="main">
      <SearchForm handleToggleSwitcher={handleToggleSwitcher} handleSubmitSearchForm={handleSubmitSearchForm} isSwitcherChecked={isSwitcherChecked} />
      {isMoviesLoaded && <MoviesCardList array={moviesList} buttonTypeRemove={true} />}
      {isNotFound && <p className="no-movies">Ничего не найдено</p>}
      {isLoading && <Preloader />}
    </main>
  )
};

export default SavedMovies;
 