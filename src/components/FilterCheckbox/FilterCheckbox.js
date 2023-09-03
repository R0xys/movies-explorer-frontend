import './FilterCheckbox.css'

function FilterCheckbox() {
  return (
    <div className='search-form__switcher'>
      <input id='serch-form-checkbox-input' type='checkbox' className='search-form__switcher-input'></input>
      <label className='search-form__switcher-body' htmlFor='serch-form-checkbox-input'></label>
    </div>
  )
}

export default FilterCheckbox;
