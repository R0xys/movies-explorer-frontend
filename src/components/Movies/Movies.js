import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import React from "react";
import { moviesApi } from '../../utils/MoviesApi';
import './Movies.css';
import { mainApi } from "../../utils/MainApi";
import { filterCards } from "../../utils/filterCards";

function Movies() {
  const [defaultMoviesList, setDefaultMoviesList] = React.useState(JSON.parse(localStorage.getItem('movies')) || [])
  const [moviesList, setMoviesList] = React.useState(JSON.parse(localStorage.getItem('movies')) || []);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isNotFound, setIsNotFound] = React.useState(false);
  const [isMoviesLoaded, setIsMoviesLoaded] = React.useState(JSON.parse(localStorage.getItem('movies')) ? true : false);
  const [isSwitcherChecked, setIsSwitcherChecked] = React.useState(JSON.parse(localStorage.getItem('switcherChecked')) || false);
  const [inputValue, setInputValue] = React.useState(localStorage.getItem('inputSearchValue') || '');

  const handleChangeSearchInput = (evt) => {
    setInputValue(evt.target.value);
  }
  const handleSubmitSearchForm = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    setIsNotFound(false);
    moviesApi.getData()
      .then((res) => {
        setDefaultMoviesList(res);
        filterCards(isSwitcherChecked, inputValue, setMoviesList, res, setIsNotFound, setIsMoviesLoaded);
        localStorage.setItem('switcherChecked', isSwitcherChecked);
        localStorage.setItem('movies', JSON.stringify(res));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false))
  }

  const handleToggleSwitcher = () => {
    setIsSwitcherChecked(!isSwitcherChecked);
  }

  React.useEffect(() => {
    localStorage.setItem('switcherChecked', isSwitcherChecked);
    localStorage.setItem('inputSearchValue', inputValue);
    filterCards(isSwitcherChecked, inputValue, setMoviesList, defaultMoviesList, setIsNotFound, setIsMoviesLoaded);
  }, [isSwitcherChecked])

  React.useEffect(() => {
    mainApi.getMovies()
    .then((res) => {
      setSavedMovies(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [moviesList])

  return (
    <main className="main">
      <SearchForm handleChange={handleChangeSearchInput} inputValue={inputValue} handleToggleSwitcher={handleToggleSwitcher} handleSubmitSearchForm={handleSubmitSearchForm} isSwitcherChecked={isSwitcherChecked} />
      {isMoviesLoaded && <MoviesCardList movies={moviesList} savedMovies={savedMovies} isSavedMoviesPage={false} />}
      {isNotFound && <p className="no-movies">Ничего не найдено</p>}
      {isLoading && <Preloader />}
    </main>
  )
};

export default Movies;
