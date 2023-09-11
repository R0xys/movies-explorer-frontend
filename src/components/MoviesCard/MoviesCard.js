import './MoviesCard.css';
import React from 'react';
import { mainApi } from '../../utils/MainApi';

function MoviesCard(props) {
  const [isSaved, setIsSaved] = React.useState(false);
  const {country, director, duration, year, description, image, trailerLink, nameRU, nameEN, id } = props.movie;
  const handleToggleLike = () => {
    if (!isSaved) {
      mainApi.saveMovie({
        country,
        director,
        duration,
        year,
        description,
        image: `https://api.nomoreparties.co${image.url}`,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail: `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
        movieId: id,
      })
      .then((res) => {
        setIsSaved(true);
        props.movie._id = res._id;
      }).catch((err) => {
        console.log(err);
      });
    }
    else if (isSaved) {
      mainApi.deleteMovie(props.movie._id)
        .then((res) => {
          setIsSaved(!isSaved);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  const handleRemove = () => {
    props.handleRemoveCard(props.movie._id)
  }

  React.useEffect(() => {
    setIsSaved(props.movie.isLiked)
  }, [props.movie.isLiked])
  return (
    <article className="card">
      <div className="card__flex-wrapper">
        <h2 className="card__title">{nameRU}</h2>
        <span className="card__time">{`${Math.trunc(duration / 60)}ч ${duration % 60}м`}</span>
      </div>
      <a href={trailerLink} target='_blank' rel="noreferrer"><img src={props.isSavedMoviesPage ? image : `https://api.nomoreparties.co${image.url}`} alt={nameRU} className="card__image" /></a>
      {!props.isSavedMoviesPage && <button type='button' onClick={handleToggleLike} className={`${isSaved ? 'card__button_type_active' : ''} card__button zero-button`}>Сохранить</button>}
      {props.isSavedMoviesPage && <button type='button' onClick={handleRemove} className='card__button_type_remove card__button zero-button'></button>}
    </article>
  )
};

export default MoviesCard;
