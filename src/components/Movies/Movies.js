import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import pic1 from '../../images/pic__COLOR_pic-1.jpg';
import pic2 from '../../images/pic__COLOR_pic-2.jpg';
import pic3 from '../../images/pic__COLOR_pic-3.jpg';
import pic4 from '../../images/pic__COLOR_pic-4.jpg';
import pic5 from '../../images/pic__COLOR_pic-5.jpg';
import pic6 from '../../images/pic__COLOR_pic-6.jpg';
import pic7 from '../../images/pic__COLOR_pic-7.jpg';
import pic8 from '../../images/pic__COLOR_pic-8.jpg';
import pic9 from '../../images/pic__COLOR_pic-9.jpg';
import pic10 from '../../images/pic__COLOR_pic-10.jpg';
import pic11 from '../../images/pic__COLOR_pic-11.jpg';
import pic12 from '../../images/pic__COLOR_pic-12.jpeg';
import React from "react";

function Movies() {
  const [moviesList, setMoviesist] = React.useState([pic12, pic1, pic9, pic2, pic4, pic5, pic6, pic7, pic8, pic3, pic10, pic11])
  return (
    <main className="main">
      <SearchForm />
      <MoviesCardList array={moviesList} buttonTypeRemove={false} />
    </main>
  )
};

export default Movies;
