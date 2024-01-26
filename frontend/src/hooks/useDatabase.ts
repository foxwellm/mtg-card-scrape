import { useState, useEffect, useRef } from "react";

import common from "../../../MKM/common2.json";

export const useDatabase = () => {
  const [studyCards, setStudyCards] = useState(null);
  // const studyCards = useRef(null);
  const [cardDiff, setCardDiff] = useState(1);
  const [currentCard, setCurrentCard] = useState(null);
  console.log("🚀 ~ useDatabase ~ currentCard:", currentCard);
  const [cardIndex, setCardIndex] = useState(0);
  console.log("🚀 ~ useDatabase ~ cardIndex:", cardIndex)

  // const cards = useRef(common);
  console.log("trigg");

  useEffect(() => {
    console.log("componentMount");
    const newCardSet = Object.values(common).filter((card) => {
      if (card.diff < 1) return true;
      return false;
    });
    setStudyCards(newCardSet);
  }, []);

  useEffect(() => {
    if (cardIndex !== null && studyCards?.length) {
      console.log("lajksdhf");
      import(
        `../../../images/${studyCards[cardIndex].name
          .toLowerCase()
          .replace(/\s+/g, "-")}.jpg`
      )
        .then((module) => {
          // Set the image source once it's loaded
          setCurrentCard({
            ...studyCards[cardIndex],
            imageSrc: module.default,
          });
        })
        .catch((error) => {
          console.error("Error dynamically importing image:", error);
        });
    }
  }, [cardIndex, studyCards]);

  const updateCard = () => {
    const nextCardsIndex = cardIndex + 1;
    if (nextCardsIndex < studyCards.length) {
      setCardIndex((cardIndex) => cardIndex + 1);
    }
  };

  return { currentCard, updateCard };
};
