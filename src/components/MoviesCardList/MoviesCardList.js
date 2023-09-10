import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';
import { useCardsRender } from '../../hooks/useCardsRender'
import { mainApi } from '../../utils/MainApi';

function MoviesCardList(props) {
  const [adaptiveArray, setAdaptiveArray] = React.useState(props.array);
  const { handleLoadCards, CardsCount, checkCardsCount } = useCardsRender(adaptiveArray)
  
  const handleRemoveCard = (id) => {
    mainApi.deleteMovie(id)
    .then((res) => {
      const arr = props.array.filter((item) => {
        return item._id !== res.movie._id
      })
      setAdaptiveArray(arr);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  React.useEffect(() => {
    setAdaptiveArray(props.array.slice(0, CardsCount));
  }, [CardsCount, props.array]);

  React.useEffect(() => {
    checkCardsCount();
  }, []);

  return (
    <section className='card-list container'>
      <div className='card-list__grid-wrapper'>
      {adaptiveArray.map((item) => {
        return (
          <MoviesCard handleRemoveCard={handleRemoveCard} buttonTypeRemove={props.buttonTypeRemove} movie={item} key={item.id}/>
        )
      })}
      </div>
      <div className={`${adaptiveArray.length < props.array.length ? '' : 'card-list__button-wrapper_clear'} card-list__button-wrapper`}>
        {adaptiveArray.length < props.array.length ? <button type='button' onClick={handleLoadCards} className='card-list__button zero-button'>Ещё</button> : ''}
      </div>
    </section>
  )
};

export default MoviesCardList;
