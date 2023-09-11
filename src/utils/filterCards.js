export function filterCards(isSwitcherChecked, inputValue, setMoviesList, arr, setIsNotFound, setIsMoviesLoaded, isFirstRender) {
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

  if ((!isFirstRender || inputValue !== '')  && arr.length === 0) {
    setIsNotFound(true);
  };

  if (arr.length === 0) {
    setIsMoviesLoaded(false);
  };

  setMoviesList(arr);
}
