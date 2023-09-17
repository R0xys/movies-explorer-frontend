import { mainApi } from '../../utils/MainApi';
import { filterCards } from '../../utils/filterCards';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import React from 'react';

function SavedMovies() {
  const [moviesList, setMoviesList] = React.useState([]);
  const [defaultMoviesList, setDefaultMoviesList] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSwitcherChecked, setIsSwitcherChecked] = React.useState(false);
  const [isMoviesLoaded, setIsMoviesLoaded] = React.useState(false);
  const [isNotFound, setIsNotFound] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [isFirstRender, setIsFirstRender] = React.useState(true);
  const [inputsBlocked, setInputsBlocked] = React.useState(false);
  
  const handleChangeSearchInput = (evt) => {
    setInputValue(evt.target.value);
  }

  const handleSubmitSearchForm = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    setIsNotFound(false);
    setInputsBlocked(true);
    mainApi.getMovies()
      .then((res) => {
        setDefaultMoviesList(res)
        filterCards(isSwitcherChecked, inputValue, setMoviesList, res, setIsNotFound, setIsMoviesLoaded, isFirstRender);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
        setInputsBlocked(false);
      })

  }

  const handleToggleSwitcher = () => {
    setIsSwitcherChecked(!isSwitcherChecked);
  }

  const handleCardsRemoved = () => {
    setIsMoviesLoaded(false)
    setIsNotFound(true);
  }

  React.useEffect(() => {
    filterCards(isSwitcherChecked, inputValue, setMoviesList, defaultMoviesList, setIsNotFound, setIsMoviesLoaded, isFirstRender);
  }, [isSwitcherChecked])

  React.useEffect(() => {
    mainApi.getMovies()
    .then((res) => {
      setDefaultMoviesList(res);
      setIsFirstRender(false);
      filterCards(isSwitcherChecked, inputValue, setMoviesList, res, setIsNotFound, setIsMoviesLoaded, isFirstRender);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => setIsLoading(false))
  }, []);

  return (
    <main className="main">
      <SearchForm inputsBlocked={inputsBlocked} handleChange={handleChangeSearchInput} inputValue={inputValue} handleToggleSwitcher={handleToggleSwitcher} handleSubmitSearchForm={handleSubmitSearchForm} isSwitcherChecked={isSwitcherChecked} />
      {isMoviesLoaded && <MoviesCardList defaultMoviesList={defaultMoviesList} setDefaultMoviesList={setDefaultMoviesList} movies={moviesList} isSavedMoviesPage={true} handleCardsRemoved={handleCardsRemoved} />}
      {isNotFound && <p className="no-movies">Ничего не найдено</p>}
      {isLoading && <Preloader />}
    </main>
  )
};

export default SavedMovies;
 