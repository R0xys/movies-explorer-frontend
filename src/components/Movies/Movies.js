import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import React from "react";
import { moviesApi } from '../../utils/MoviesApi';
import './Movies.css';

function Movies() {
  const [moviesList, setMoviesist] = React.useState(JSON.parse(localStorage.getItem('movies')) || []);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isNotFound, setIsNotFound] = React.useState(false);
  const [isMoviesLoaded, setIsMoviesLoaded] = React.useState(JSON.parse(localStorage.getItem('movies')) ? true : false);
  const [isSwitcherChecked, setIsSwitcherChecked] = React.useState(JSON.parse(localStorage.getItem('switcherChecked')) || false);

  const handleSubmitSearchForm = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    moviesApi.getData()
      .then((res) => {
        setMoviesist(res);
        setIsMoviesLoaded(true);
        if (res.length === 0) {
          setIsMoviesLoaded(false)
          setIsNotFound(true);
        };
        localStorage.setItem('movies', JSON.stringify(res));
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
      {isMoviesLoaded && <MoviesCardList array={moviesList} buttonTypeRemove={false} />}
      {isNotFound && <p className="no-movies">Ничего не найдено</p>}
      {isLoading && <Preloader />}
    </main>
  )
};

export default Movies;
