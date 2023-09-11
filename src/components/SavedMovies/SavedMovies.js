import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import pic12 from '../../images/pic__COLOR_pic-12.jpeg';
import pic1 from '../../images/pic__COLOR_pic-1.jpg';
import pic9 from '../../images/pic__COLOR_pic-9.jpg';
import React from 'react';

function SavedMovies() {
  const [moviesList, setMoviesList] = React.useState([pic12, pic1, pic9]);

  return (
    <main className="main">
      <SearchForm />
      <MoviesCardList array={moviesList} buttonTypeRemove={true} />
    </main>
  )
};

export default SavedMovies;
