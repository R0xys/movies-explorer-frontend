import React from "react";

export function useCardsRender(arr) {
  const [CardsCount, setCardsCount] = React.useState(0);

  const checkCardsCount = () => {
    const resolution = document.documentElement.clientWidth;
    if (resolution >= 900) {
      setCardsCount(12)
    }
    else if (resolution <= 900 && resolution >= 600) {
      setCardsCount(8)
    }
    else if (resolution <= 600) {
      setCardsCount(5)
    }
  }

  const checkResolution = () => {
    const resolution = document.documentElement.clientWidth;
    if (resolution >= 900) {
      if (arr.length % 3 === 1) {
        setCardsCount(CardsCount + 5);
      }
      else if (arr.length % 3 === 2) {
        setCardsCount(CardsCount + 4);
      }
      else setCardsCount(CardsCount + 3);
    }
    else if (resolution <= 900 && resolution >= 600) {
      if (arr.length % 2 === 1) {
        setCardsCount(CardsCount + 3);
      }
      else setCardsCount(CardsCount + 2);
    }
    else if (resolution <= 600) {
      setCardsCount(CardsCount + 2);
    }
  }

  const handleLoadCards = () => {
    checkResolution();
  }
  
  return { CardsCount, checkCardsCount, handleLoadCards }
}