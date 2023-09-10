import './FilterCheckbox.css'

function FilterCheckbox(props) {
  const handleClick = () => {
    props.handleToggleSwitcher();
  }

  return (
    <div className='search-form__switcher'>
      <input id='serch-form-checkbox-input' checked={props.isSwitcherChecked} type='checkbox' className='search-form__switcher-input'></input>
      <label onClick={handleClick} className='search-form__switcher-body' htmlFor='serch-form-checkbox-input'></label>
    </div>
  )
}

export default FilterCheckbox;
