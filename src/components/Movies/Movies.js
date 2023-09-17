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
  const [isFirstRender, setIsFirstRender] = React.useState(true);
  const [inputsBlocked, setInputsBlocked] = React.useState(false);

  const handleChangeSearchInput = (evt) => {
    setInputValue(evt.target.value);
  }

  const handleSubmitSearchForm = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    setIsNotFound(false);

    if (!localStorage.getItem('movies')) {
      setInputsBlocked(true);
      moviesApi.getData()
      .then((res) => {
        setDefaultMoviesList(res);
        setIsFirstRender(false);
        filterCards(isSwitcherChecked, inputValue, setMoviesList, res, setIsNotFound, setIsMoviesLoaded, isFirstRender);
        localStorage.setItem('switcherChecked', isSwitcherChecked);
        localStorage.setItem('movies', JSON.stringify(res));
        localStorage.setItem('inputSearchValue', inputValue);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setInputsBlocked(false);
        setIsLoading(false);
      })
    }

    else if (localStorage.getItem('movies')) {
      setIsFirstRender(false);
      filterCards(isSwitcherChecked, inputValue, setMoviesList, JSON.parse(localStorage.getItem('movies')), setIsNotFound, setIsMoviesLoaded, isFirstRender);
      localStorage.setItem('switcherChecked', isSwitcherChecked);
      localStorage.setItem('inputSearchValue', inputValue);
      setIsLoading(false)
    }
  }

  const handleToggleSwitcher = () => {
    setIsSwitcherChecked(!isSwitcherChecked);
    localStorage.setItem('inputSearchValue', inputValue);
  }

  React.useEffect(() => {
    localStorage.setItem('switcherChecked', isSwitcherChecked);
    localStorage.setItem('inputSearchValue', inputValue);
    filterCards(isSwitcherChecked, inputValue, setMoviesList, defaultMoviesList, setIsNotFound, setIsMoviesLoaded, isFirstRender);
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
      <SearchForm inputsBlocked={inputsBlocked} handleChange={handleChangeSearchInput} inputValue={inputValue} handleToggleSwitcher={handleToggleSwitcher} handleSubmitSearchForm={handleSubmitSearchForm} isSwitcherChecked={isSwitcherChecked} />
      {isMoviesLoaded && <MoviesCardList movies={moviesList} savedMovies={savedMovies} isSavedMoviesPage={false} />}
      {isNotFound && <p className="no-movies">Ничего не найдено</p>}
      {isLoading && <Preloader />}
    </main>
  )
};

export default Movies;
