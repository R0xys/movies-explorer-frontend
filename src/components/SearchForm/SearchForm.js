import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm(props) {
  const handeSubmit = (evt) => {
    props.handleSubmitSearchForm(evt);
  }
  
  return (
    <section className='search-form'>
      <div className='container'>
        <form onSubmit={handeSubmit} action="#" method="get" name='search-form' className="search-form__form" id='search-form'>
          <div className='search-form__input'>
            <input onChange={props.handleChange} disabled={props.inputsBlocked} tabIndex={1} type='text' name='search-form-input' value={props.inputValue} className='search-form__input-line' placeholder='Фильм' />
            <button tabIndex={2} type='submit' disabled={props.inputsBlocked} className='search-form__button zero-button'>Поиск</button>
          </div>
          <div className='search-form__flex-wrapper'>
            <FilterCheckbox handleToggleSwitcher={props.handleToggleSwitcher} isSwitcherChecked={props.isSwitcherChecked} />
            <label htmlFor='serch-form-checkbox-input' className='search-form__caption'>Короткометражки</label>
          </div>
        </form>
      </div>
    </section>
  )
};

export default SearchForm;