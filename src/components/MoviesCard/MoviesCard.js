import './MoviesCard.css';
import React from 'react';

function MoviesCard(props) {
  const [isSaved, setIsSaved] = React.useState(false)

  const handleClick = () => {
    setIsSaved(true);
  }

  return (
    <article className="card">
      <div className="card__flex-wrapper">
        <h2 className="card__title">В погоне за Бенкси</h2>
        <span className="card__time">0ч 42м</span>
      </div>
      <img src={props.image} alt='Картинка' className="card__image" />
      {!props.buttonTypeRemove && <button type='button' onClick={handleClick} className={`${isSaved ? 'card__button_type_active' : 'card__button'} zero-button`}>Сохранить</button>}
      {props.buttonTypeRemove && <button type='button' className='card__button_type_remove zero-button'></button>}
    </article>
  )
};

export default MoviesCard;
