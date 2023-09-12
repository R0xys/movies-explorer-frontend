import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';
import { useCardsRender } from '../../hooks/useCardsRender'
import { mainApi } from '../../utils/MainApi';

function MoviesCardList(props) {
  const [adaptiveArray, setAdaptiveArray] = React.useState(props.movies);
  const { handleLoadCards, CardsCount, checkCardsCount } = useCardsRender(adaptiveArray);

  const handleRemoveCard = (id) => {
    mainApi.deleteMovie(id)
    .then((res) => {
      const arr = adaptiveArray.filter((item) => {
        return item._id !== res.movie._id;
      })
      const movies = props.defaultMoviesList.filter((item) => {
        return item._id !== res.movie._id;
      })
      props.setDefaultMoviesList(movies);
      setAdaptiveArray(arr);
      if (arr.length === 0) {
        props.handleCardsRemoved();
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  React.useEffect(() => {
    if (props.isSavedMoviesPage) {
      setAdaptiveArray(props.movies);
    }
    else {
      setAdaptiveArray(props.movies.slice(0, CardsCount));
    }
  }, [CardsCount, props.movies]);

  React.useEffect(() => {
    checkCardsCount();
  }, [props.movies]);

  return (
    <section className='card-list container'>
      <div className='card-list__grid-wrapper'>
      {adaptiveArray.map((movie) => {
        if (props.isSavedMoviesPage || props.savedMovies.length === 0) {
            return (
              <MoviesCard handleRemoveCard={handleRemoveCard} isSavedMoviesPage={props.isSavedMoviesPage} movie={movie} key={movie.id || movie.movieId}/>
            )
          }
        else if (!props.isSavedMoviesPage) {
          props.savedMovies.forEach(savedMovie => {
            if (savedMovie.nameRU === movie.nameRU) {
              movie._id = savedMovie._id;
              movie.isLiked = true;
            }
          });

          return (
            <MoviesCard handleRemoveCard={handleRemoveCard} isSavedMoviesPage={props.isSavedMoviesPage} movie={movie} key={movie.id || movie.movieId}/>
          )
        }
      })}
      </div>
      <div className={`${adaptiveArray.length < props.movies.length && !props.isSavedMoviesPage ? '' : 'card-list__button-wrapper_clear'} card-list__button-wrapper`}>
        {adaptiveArray.length < props.movies.length && !props.isSavedMoviesPage ? <button type='button' onClick={handleLoadCards} className='card-list__button zero-button'>Ещё</button> : ''}
      </div>
    </section>
  )
};

export default MoviesCardList;
