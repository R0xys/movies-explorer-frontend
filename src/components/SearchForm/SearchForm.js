import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search-form'>
      <div className='container'>
        <form action="#" method="get" name='search-form' className="search-form__form" id='search-form'>
          <div className='search-form__input'>
            <input type='text' className='search-form__input-line' placeholder='Фильм' />
            <button type='submit' className='search-form__button zero-button'>Поиск</button>
          </div>
          <div className='search-form__flex-wrapper'>
            <FilterCheckbox />
            <label className='search-form__caption'>Короткометражки</label>
          </div>
        </form>
      </div>
    </section>
  )
};

export default SearchForm;