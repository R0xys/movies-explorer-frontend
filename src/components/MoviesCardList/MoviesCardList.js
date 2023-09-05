import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';

function MoviesCardList(props) {
  const [isSavedMovie, setIsSavedMovie] = React.useState();

  return (
    <section className='card-list container'>
      <div className='card-list__grid-wrapper'>
      {props.array.map((item, index) => {
        return (
          <MoviesCard buttonTypeRemove={props.buttonTypeRemove} image={item} key={index}/>
        )
      })}
      </div>
      <div className={`${props.array.length > 9 ? '' : 'card-list__button-wrapper_clear'} card-list__button-wrapper`}>
        {props.array.length > 9 ? <button type='button' className='card-list__button zero-button'>Ещё</button> : ''}
      </div>
    </section>
  )
};

export default MoviesCardList;
