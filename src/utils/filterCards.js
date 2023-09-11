export function filterCards(isSwitcherChecked, inputValue, setMoviesList, arr, setIsNotFound, setIsMoviesLoaded) {
  setIsNotFound(false);
  setIsMoviesLoaded(true);
  if (isSwitcherChecked === true) {
    arr = arr.filter((item) => {
      return item.duration <= 40
    })
  }
  arr = arr.filter((item) => {
    return item.nameRU.toLowerCase().includes(inputValue.toLowerCase()) || item.nameEN.toLowerCase().includes(inputValue.toLowerCase());
  })
  if (arr.length === 0) {
    setIsNotFound(true);
    setIsMoviesLoaded(false);
  };
  setMoviesList(arr);
}
